import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Dialog } from "@headlessui/react";

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
            <div className="max-w-screen-lg mx-auto p-4 md:p-8">
                <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
                <div className="mb-6">
                    <p className="mb-2 text-gray-600">
                        <span className="font-semibold">Date:</span> {work.date}
                    </p>
                    <p className="mb-2 text-gray-600">
                        <span className="font-semibold">Client:</span> {work.client}
                    </p>
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
