import React from 'react';
import { graphql, Link } from 'gatsby';
import { Calendar, Person } from "react-bootstrap-icons"
import { GatsbyImage, getImage, } from "gatsby-plugin-image"
import Layout from '../components/layout';
import ContentfulImage from '../components/ContentfulImage';

const WorksPage = ({ data }) => {
    const works = data.allContentfulZulzidanWorks.edges;

    return (
        <Layout>
            <main className="index-page  px-3 lg:px-10 ">
                <section className="flex flex-col gap-4 ">
                    <div className="flex flex-col justify-between font-medium gap-4 pt-8 pb-24">
                        <h3 className="font-heading font-bold text-4xl md:text-7xl py-4">
                            SELECTED WORK
                            <br />
                            (2019 — 2023)
                        </h3>
                        <p className='font-heading font-medium text-lg md:text-2xl md:w-8/12'>Have a look at some of the projects I’ve worked on. Clients span a diverse range, from educational platforms to unique e-commerce solutions and introspective spaces like my personal blog</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        {works.map(({ node }) => (
                            <Link to={`/works/${node.slug}`} key={node.title} className="group hover:bg-gray-200 p-5 rounded-lg transition ease-in-out duration-200 transform hover:scale-105 shadow-lg">
                                <div className="flex flex-col gap-6">
                                    <GatsbyImage image={getImage(node.images[0])} alt={node.title} className="rounded-lg shadow-md group-hover:opacity-80" />
                                    <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-indigo-600">{node.title}</h3>
                                    <div className="flex space-x-4 mb-2">
                                        <p className="text-gray-600 flex items-center"> <Calendar size={16} className="mr-1" /> {node.date}</p>
                                        <p className="text-gray-600 flex items-center"> <Person size={16} className="mr-1" /> {node.client}</p>
                                    </div>
                                    <p className="text-gray-700 line-clamp-2">{node.description.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </section>
            </main>
        </Layout>
    );
};

export const query = graphql`
  query WorksPageQuery {
    allContentfulZulzidanWorks {
      edges {
        node {
          description {
            description
          }
          date(formatString: "DD-MM-YYYY")
          client
          title
          slug
          images {
                gatsbyImageData(width: 2000) 
                title
            }
        }
      }
    }
  }
`;

export default WorksPage;
