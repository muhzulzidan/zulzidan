import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Dialog } from "@headlessui/react";
import { CalendarFill, PersonFill, Link45deg } from "react-bootstrap-icons";

import generateExcerpt from '../utils/generateExcerpt';
import Layout from "../components/layout";
import SEOHead from "../components/head";


export default function WorkTemplate({ data }) {
    const work = data.contentfulZulzidanWorks;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (index) => {
        setCurrentImage(getImage(work.images[index]));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <div className=" p-4 md:p-8">
                <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
                <div className="mb-6 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                        <CalendarFill className="text-xl mr-1" />
                        <span className="font-semibold">Date:</span>
                        <span>{work.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <PersonFill className="text-xl mr-1" />
                        <span className="font-semibold">Client:</span>
                        <span>{work.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Link45deg className="text-xl mr-1" />
                        <span className="font-semibold">URL:</span>
                        <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                            {work.url}
                        </a>
                    </div>
                </div>
                <p className="mb-8 text-gray-700 border-b pb-4">{work.description.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {work.images.map((image, index) => (
                        <div key={index} onClick={() => openModal(index)}>
                            <GatsbyImage
                                image={getImage(image)}
                                alt={image.title}
                                className="rounded hover:opacity-80 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                {isModalOpen && (
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        open={isModalOpen}
                        onClose={closeModal}
                    >
                        <div className="flex items-center justify-center min-h-screen">
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                            <GatsbyImage
                                image={currentImage}
                                alt="Zoomed Preview"
                                className="z-20 max-w-3xl max-h-screen"
                            />
                        </div>
                    </Dialog>
                )}
            </div>
        </Layout>
    );
}

export const query = graphql`
  query WorkBySlug($slug: String!) {
    contentfulZulzidanWorks(slug: { eq: $slug }) {
      title
      date(formatString: "DD-MM-YYYY")
      client
      url
      description {
        description
      }
      images {
        gatsbyImageData(width: 2000) 
        title
      }
    }
  }
`;


export const Head = ({ data }) => {
    const work = data.contentfulZulzidanWorks;
    return <SEOHead title={work.title} description={work.description.description} image={work.images[0]} />;
};