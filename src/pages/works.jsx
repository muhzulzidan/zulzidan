import React from 'react';
import { graphql, Link } from 'gatsby';
import { Calendar, Person } from "react-bootstrap-icons"
import { GatsbyImage, getImage, } from "gatsby-plugin-image"
import Layout from '../components/layout';
import ContentfulImage from '../components/ContentfulImage';

const WorksPage = ({ data }) => {
    const works = data.allContentfulZulzidanWorks.edges;
    console.log(works)
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
                    <div className="flex flex-col gap-8">
                        {works.map(({ node }) => (
                            <Link to={`/works/${node.slug}`} key={node.title}>
                                <div className="flex md:flex-row flex-col gap-4" >
                                    <div className="md:w-4/12 w-full ">
                                        {/* <ContentfulImage
                                            imageDetails={node.images[0].fields}
                                            alt={node.title}
                                        /> */}

                                        <GatsbyImage image={getImage(node.images[0])} alt={node.title} />

                                    </div>
                                    <div className="flex flex-col justify-between text-lg w-full">
                                        <h3 className="font-heading font-semibold text-2xl mb-3">{node.title}</h3>
                                        <div className="flex gap-4">
                                            <p className="text-gray-800 flex gap-1 items-center text-base"> <Calendar size={12} /> {node.date}</p>
                                            <p className="text-gray-800 flex gap-1 items-center text-base"> <Person size={12} /> {node.client}</p>
                                        </div>
                                        <p className="font-body line-clamp-2">{node.description.description}</p>
                                    </div>
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
