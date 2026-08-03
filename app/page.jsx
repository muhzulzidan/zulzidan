import LegacyPage from "@/components/legacy-page";
import { getBlogSummaries, getWorks } from "@/lib/contentful";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata.home;
export const revalidate = 3600;

export default async function HomePage() {
  const [blogs, works] = await Promise.all([getBlogSummaries(), getWorks()]);
  const data = {
    allContentfulBlog: { nodes: blogs.slice(0, 3) },
    allContentfulZulzidanWorks: { edges: works.slice(0, 4).map((node) => ({ node })) },
  };
  return <LegacyPage page="home" data={data} location={{ pathname: "/" }} />;
}
