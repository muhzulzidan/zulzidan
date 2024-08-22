import React, { useState, } from "react";

import { graphql, Link } from 'gatsby'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"
import { Search } from 'react-bootstrap-icons';

import SEOHead from "../components/head";
import Layout from '../components/layout'
import generateExcerpt from '../utils/generateExcerpt';
import { GatsbyImage } from 'gatsby-plugin-image';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

const ServicesPage = ({ location }) => {

    const services = [
        {
            id: 1,
            title: "Jasa Pembuatan Website di Bone",
            description: "Kami menawarkan jasa pembuatan website profesional di Bone dengan harga terjangkau.",
            date: "2023-10-01",
            image: "path/to/image1.jpg",
            link: "/jasa-pembuatan-website-di-bone"
        },
        {
            id: 2,
            title: "Jasa Pembuatan Website",
            description: "Layanan pembuatan website untuk berbagai kebutuhan bisnis Anda.",
            date: "2023-09-15",
            image: "path/to/image2.jpg",
            link: "/jasa-pembuatan-website"
        }
    ];

    return (
        <Layout location={location}>
            <section className="pt-10 lg:px-20 ">
                <div className="container mx-auto space-y-6 sm:space-y-12 ">
                    <div className="text-center mb-6">
                        {/* Title and Description */}
                        <h2 className="font-heading font-bold text-3xl mb-2">Services</h2>
                        <p className="font-body text-gray-700  text-lg">Explore our latest services below.</p>

                        {/* Search Box */}
                        {/* <div className="mt-6 relative max-w-md mx-auto">
                            <Search className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="p-2 pl-10 w-full border rounded-md"
                            />
                        </div> */}
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:py-0 py-4">
                        {services.map(service => (
                            <Link
                                key={service.id}
                                rel="noopener noreferrer"
                                to={service.link}
                                className="flex md:block  w-full h-full overflow-hidden bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 "
                            >
                                <div className="px-4 pt-6 py-4 md:p-6 w-full">
                                    <h3 className="text-base md:text-xl font-bold mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <span className="text-base md:text-xs text-gray-500">
                                        {service.date}
                                    </span>
                                    <p className="mt-3 text-sm hidden md:block text-gray-700">{service.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>

    )
}


export const Head = () => {
    return (
        <SEOHead
            title="Blog by Muhammad Zulzidan"
            description="Dive into insightful articles and explore a wide range of topics written by Muhammad Zulzidan."
        />
    );
};


export default ServicesPage
