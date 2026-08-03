import { notFound } from "next/navigation";
import LegacyPage from "@/components/legacy-page";
import { getBlog, getBlogs } from "@/lib/contentful";
import generateExcerpt from "@/utils/generateExcerpt";
import { createMetadata } from "@/lib/site";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return createMetadata({
    title: blog.title,
    description: generateExcerpt(blog.content.raw),
    path: `/blogs/${slug}/`,
    image: blog.featuredMedia?.url,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();
  return <LegacyPage page="blog" data={{ contentfulBlog: blog }} location={{ pathname: `/blogs/${slug}/` }} />;
}
