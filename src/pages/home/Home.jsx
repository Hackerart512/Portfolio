import React, { useEffect } from "react";
import Navbar from '../../components/common/Navbar'
import Resume from '../../components/common/Resume'
import Bio from '../../components/common/Bio'
import Service from '../../components/common/Service'
import Hero from '../../components/common/Hero'
import Footer from '../../components/common/Footer'
import PortfolioSlider from '../../components/portfolio/PortfolioSlider'
import Clients from '../../components/common/Clients'
import { Link } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async'

import { imageDrop } from "../../utils/imageDrop";

const Home = () => {

    useEffect(() => {
        imageDrop(".content-effect");
    }, []);
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

            {/* <section className="codrops_mwg">
                <p className="content-effect">
                    <span>Move your mouse to make</span>
                    <span>images fall and bounce</span>
                </p>
                <div className="medias">

                    <img src="/images/drop_img/html.jpg" alt="" /> 
                    <img src="/images/drop_img/css.jpg" alt="" /> 
                    <img src="/images/drop_img/js.jpg" alt="" />

                </div>
            </section> */}

            <Resume />
            <Clients />
            <PortfolioSlider />

            <Footer />
           
        </>
    )
}

export default Home

