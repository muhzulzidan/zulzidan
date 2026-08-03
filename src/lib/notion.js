import "server-only";

function richTextValue(property) {
  const values = property?.title || property?.rich_text || [];
  return values.map((item) => item.plain_text || item.text?.content || "").join("");
}

export async function getNotionLinks() {
  const token = process.env.NOTION_API_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) return [];

  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sorts: [{ property: "order", direction: "ascending" }] }),
    next: { revalidate: 3600, tags: ["notion-links"] },
  });

  if (!response.ok) throw new Error(`Notion request failed with status ${response.status}`);

  const payload = await response.json();
  return (payload.results || []).map((page) => ({
    id: page.id,
    title: richTextValue(page.properties?.Name),
    url: page.properties?.Url?.url || "#",
    order: page.properties?.order?.number ?? 0,
  }));
}
