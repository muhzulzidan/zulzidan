import LegacyPage from "@/components/legacy-page";
import { getBlogSummaries } from "@/lib/contentful";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.blogs;
export const revalidate = 3600;
export default async function Page() {
  const blogs = await getBlogSummaries();
  return <LegacyPage page="blogs" data={{ allContentfulBlog: { nodes: blogs } }} location={{ pathname: "/blogs/" }} />;
}
