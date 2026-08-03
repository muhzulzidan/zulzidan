import LegacyPage from "@/components/legacy-page";
import { getWorks } from "@/lib/contentful";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.jasaWebsite;
export const revalidate = 3600;
export default async function Page() {
  const works = await getWorks();
  return <LegacyPage page="jasaWebsite" data={{ allContentfulZulzidanWorks: { edges: works.map((node) => ({ node })) } }} location={{ pathname: "/jasa-pembuatan-website/" }} />;
}
