import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Calendar, Person } from 'react-bootstrap-icons';

const WorksSection = ({ works }) => (
    <section className="space-y-8">
        <div className="flex justify-between items-center font-medium">
            <h3 className="text-2xl font-semibold">Selected Works</h3>
            <Link to="/works/" className="text-lg hover:text-indigo-600 transition duration-200">Explore Below</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map(({ node }) => (
                <Link to={`/works/${node.slug}`} key={node.title} className="group hover:bg-gray-200 p-5 rounded-lg transition ease-in-out duration-200 transform hover:scale-105 shadow-lg">
                    <GatsbyImage image={getImage(node.images[0])} alt={node.title} className="mb-4 rounded-lg shadow-md" />
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600">{node.title}</h3>
                    <div className="flex space-x-4 mb-2">
                        <p className="text-gray-600 flex items-center"> <Calendar size={16} className="mr-1" /> {node.date}</p>
                        <p className="text-gray-600 flex items-center"> <Person size={16} className="mr-1" /> {node.client}</p>
                    </div>
                    <p className="text-gray-700 line-clamp-2">{node.description.description}</p>
                </Link>
            ))}
        </div>
    </section>
);

export default WorksSection;
