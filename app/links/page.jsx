import LegacyPage from "@/components/legacy-page";
import { getNotionLinks } from "@/lib/notion";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.links;
export const revalidate = 3600;
export default async function Page() {
  const links = await getNotionLinks();
  const edges = links.map((link) => ({ node: { id: link.id, title: link.title, properties: { Url: { value: link.url }, order: { value: link.order } } } }));
  return <LegacyPage page="links" data={{ allNotion: { edges } }} location={{ pathname: "/links/" }} />;
}
