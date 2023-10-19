import React from 'react';
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, } from "gatsby-plugin-image"
import { Calendar, Person } from "react-bootstrap-icons"
import generateExcerpt from '../../utils/generateExcerpt';


const BlogsSection = ({ newestPosts }) => (
    <section className="flex flex-col pt-12 gap-4">
        <h2 className="font-heading text-2xl font-semibold">Blogs</h2>
        <p className="text-lg">I also love to write and share my knowledge about tech.</p>
        <div className="flex flex-col md:flex-row">
            <ul className="flex flex-col pt-4 tracking-normal gap-4">
                {newestPosts.map((post) => (
                    <li key={post.slug} className="pt-4">
                        <Link
                            to={`/blogs/${post.slug}`}
                            className="hover:text-indigo-600 font-normal text-base flex md:flex-row flex-col gap-8 md:gap-4"
                        >
                            <GatsbyImage image={getImage(post.featuredMedia)} alt={post.title} />
                            <div className="flex flex-col gap-1 w-10/12">
                                <h3 className="text-2xl font-semibold">{post.title}</h3>
                                <p className="text-lg line-clamp-2">{generateExcerpt(post.content.raw)}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default BlogsSection;
