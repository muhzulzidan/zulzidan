import LegacyPage from "@/components/legacy-page";
import { getWorks } from "@/lib/contentful";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.works;
export const revalidate = 3600;
export default async function Page() {
  const works = await getWorks();
  return <LegacyPage page="works" data={{ allContentfulZulzidanWorks: { edges: works.map((node) => ({ node })) } }} location={{ pathname: "/works/" }} />;
}
