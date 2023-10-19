import React from 'react';

const HomeSection = () => {
    return (
        <section className="home flex flex-col gap-4 lg:gap-8">
            <h1 className="text-3xl lg:text-5xl w-10/12">
                <span className="font-bold font-heading ">
                    Hi 👋, i am Zulzidan
                </span>
                <br />
                Web developer & Digital Marketer
            </h1>
            <p className="text-lg lg:text-3xl w-10/12 lg:w-9/12">
                Empowering businesses to thrive in the digital landscape through
                innovative web development and strategic digital marketing.
            </p>

            <div className="py-4 lg:pt-10">
                <a
                    href="mailto:mail@zulzidan.com"
                    className="border border-solid border-gray-950 font-medium font-heading rounded-full px-6 py-3 my-4 text-lg"
                >
                    mail@zulzidan.com
                </a>
            </div>
        </section>
    );
}

export default HomeSection;
