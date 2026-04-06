import React from 'react'
import Navbar from '../../components/common/Navbar'
import Resume from '../../components/common/Resume'
import Bio from '../../components/common/Bio'
import Service from '../../components/common/Service'
import Hero from '../../components/common/Hero'
import Footer from '../../components/common/Footer'
import PortfolioSlider from '../../components/portfolio/PortfolioSlider'
import Clients from '../../components/common/Clients'

import { Helmet } from 'react-helmet-async'
const Home = () => {


    return (
        <>

            <Helmet>
                <title>Home - Personal Portfolio</title>
                <meta name="description" content="" />
            </Helmet>

            <Navbar bg_color="#ffe9d9" />
            <Hero />
            <Service />
            <Bio />
            <Resume />
            <Clients />
            <PortfolioSlider/>

            <Footer />
        </>
    )
}

export default Home

