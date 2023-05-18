import React from 'react';
import {SEO} from '../components/seo';
const LandingPage = () => {
    return (
        <div className="bg-gray-100">
            <header className="p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800">
                    Bangun Toko Online Profesionalmu Bersama Kami!
                </h1>
            </header>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Pengenalan
                </h2>
                <p className="text-gray-600">
                    Briefly introduce your business and highlight your expertise in website development for businesses without strong digital marketing.
                </p>
            </section>

            <section className="p-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Keunggulan Tanpa WordPress
                </h2>
                <p className="text-gray-600">
                    Explain the benefits of not using WordPress, such as increased flexibility, speed, and enhanced security. Focus on how Gatsby as a static website generator provides these advantages.
                </p>
            </section>

            {/* Add more sections for other points you mentioned */}

            <section className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Call-to-Action
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Chat Now
                </button>
            </section>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Contact Information
                </h2>
                <p className="text-gray-600">
                    Phone: 081354789375
                </p>
            </section>

            {/* Add more sections for portfolio examples, customer understanding, etc. */}
        </div>
    );
};

export default LandingPage;


export function Head({ location }) {
    return (
        <SEO title={"Bangun Toko Online Profesionalmu Bersama Kami!"} pathname={location.pathname} />
    )
}