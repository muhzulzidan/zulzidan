import "server-only";

const API_HOST = "https://cdn.contentful.com";
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

function contentfulUrl(contentType, extra = {}) {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !token) return null;

  const url = new URL(`${API_HOST}/spaces/${space}/environments/${environment}/entries`);
  url.searchParams.set("access_token", token);
  url.searchParams.set("content_type", contentType);
  url.searchParams.set("include", "10");
  url.searchParams.set("limit", "1000");
  Object.entries(extra).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  return url;
}

async function requestEntries(contentType, extra) {
  const url = contentfulUrl(contentType, extra);
  if (!url) return { items: [], includes: {} };

  const response = await fetch(url, {
    next: { revalidate: 3600, tags: ["contentful", contentType] },
  });

  if (!response.ok) {
    throw new Error(`Contentful request failed with status ${response.status}`);
  }

  return response.json();
}

function assetUrl(file) {
  const url = file?.url;
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function normalizeAsset(asset) {
  if (!asset?.fields) return null;
  const file = asset.fields.file || {};
  const dimensions = file.details?.image || {};
  const url = assetUrl(file);
  const width = dimensions.width || 1200;
  const height = dimensions.height || 675;

  return {
    contentful_id: asset.sys?.id,
    __typename: "ContentfulAsset",
    title: asset.fields.title || "",
    description: asset.fields.description || "",
    url,
    width,
    height,
    gatsbyImageData: {
      url,
      width,
      height,
      images: { fallback: { src: url } },
    },
  };
}

function normalizeCode(entry) {
  return {
    contentful_id: entry.sys?.id,
    __typename: "ContentfulCodeBlock",
    language: entry.fields?.language || "text",
    code: { code: entry.fields?.code || "" },
  };
}

function includedMaps(payload) {
  return {
    assets: new Map((payload.includes?.Asset || []).map((asset) => [asset.sys.id, asset])),
    entries: new Map((payload.includes?.Entry || []).map((entry) => [entry.sys.id, entry])),
  };
}

function resolveAsset(link, maps) {
  const id = link?.sys?.id;
  return normalizeAsset(maps.assets.get(id));
}

function richText(content, maps) {
  const references = [];
  const seen = new Set();

  function visit(node) {
    const target = node?.data?.target;
    const id = target?.sys?.id;
    if (id && !seen.has(id)) {
      const asset = maps.assets.get(id);
      const entry = maps.entries.get(id);
      const reference = asset ? normalizeAsset(asset) : entry ? normalizeCode(entry) : null;
      if (reference) {
        seen.add(id);
        references.push(reference);
      }
    }
    node?.content?.forEach(visit);
  }

  if (content) visit(content);
  return { raw: JSON.stringify(content || { nodeType: "document", data: {}, content: [] }), references };
}

function formatDate(value, style = "short") {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  if (style === "long") {
    return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "2-digit", timeZone: "UTC" }).format(date);
  }
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(date).replaceAll("/", "-");
}

function normalizeBlog(item, maps) {
  const fields = item.fields || {};
  return {
    title: fields.title || "Untitled",
    slug: fields.slug || item.sys.id,
    date: fields.date || item.sys.createdAt,
    content: richText(fields.content, maps),
    featuredMedia: resolveAsset(fields.featuredMedia, maps),
  };
}

function excerptFromDocument(document, maxLength = 150) {
  let text = "";
  function visit(node) {
    if (node?.nodeType === "text") text += `${node.value || ""} `;
    node?.content?.forEach(visit);
  }
  visit(document);
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized.length <= maxLength ? normalized : `${normalized.slice(0, maxLength)}...`;
}

function normalizeWork(item, maps, dateStyle = "short") {
  const fields = item.fields || {};
  return {
    title: fields.title || "Untitled",
    slug: fields.slug || item.sys.id,
    description: { description: fields.description || "" },
    images: (fields.images || []).map((image) => resolveAsset(image, maps)).filter(Boolean),
    date: formatDate(fields.date || item.sys.createdAt, dateStyle),
    client: fields.client || "",
    url: fields.url || "",
  };
}

export async function getBlogs() {
  const payload = await requestEntries("blog", { order: "-fields.date" });
  const maps = includedMaps(payload);
  return payload.items.map((item) => normalizeBlog(item, maps));
}

export async function getBlogSummaries() {
  const payload = await requestEntries("blog", { order: "-fields.date" });
  const maps = includedMaps(payload);
  return payload.items.map((item) => {
    const blog = normalizeBlog(item, maps);
    return {
      title: blog.title,
      slug: blog.slug,
      date: blog.date,
      excerpt: excerptFromDocument(item.fields?.content),
      featuredMedia: blog.featuredMedia,
    };
  });
}

export async function getBlog(slug) {
  const payload = await requestEntries("blog", { "fields.slug": slug, limit: 1 });
  const item = payload.items[0];
  return item ? normalizeBlog(item, includedMaps(payload)) : null;
}

export async function getWorks() {
  const payload = await requestEntries("zulzidanWorks", { order: "-fields.date" });
  const maps = includedMaps(payload);
  return payload.items.map((item) => normalizeWork(item, maps));
}

export async function getWork(slug) {
  const payload = await requestEntries("zulzidanWorks", { "fields.slug": slug, limit: 1 });
  const item = payload.items[0];
  return item ? normalizeWork(item, includedMaps(payload), "long") : null;
}
