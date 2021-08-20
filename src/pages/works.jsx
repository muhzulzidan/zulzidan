import React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";

import WorksCarousel from "../components/Works"
// import WorksCarousel



const WorksPage = () => {
    return (
        <Layout>
            <title>Works | zulzidan</title>
            <div className="worksPages">
                <h1>Works</h1>
                <WorksCarousel className="WorksCarousel"/>
            </div>
        </Layout>
    )
}

export default WorksPage
