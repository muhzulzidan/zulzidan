import { notFound } from "next/navigation";
import LegacyPage from "@/components/legacy-page";
import { getWork, getWorks } from "@/lib/contentful";
import { createMetadata } from "@/lib/site";

export const revalidate = 3600;
export async function generateStaticParams() {
  const works = await getWorks();
  return works.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) return {};
  return createMetadata({ title: work.title, description: work.description.description, path: `/works/${slug}/`, image: work.images[0]?.url });
}
export default async function Page({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) notFound();
  return <LegacyPage page="work" data={{ contentfulZulzidanWorks: work }} location={{ pathname: `/works/${slug}/` }} />;
}
