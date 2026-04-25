import React, { useState, useEffect } from "react";

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer' 
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import PortfolioGridPage from "../components/portfolio/PortfolioGrid";


const PortfolioDetailPage = () => {
    return (
        <>
            <Helmet>
                <title>Portfolios</title>
                <meta name="description" content="" />
            </Helmet>

            <Navbar bg_color="white" />

            <section className="bg-[#ffefd9] py-16 md:py-5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block text-sm font-bold uppercase tracking-[0.35em] text-[#ff9330]">
                            My Portfolios
                        </span>
                        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            Hi, I’m Pavan — Full Stack Web Developer
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            I’m a passionate frontend developer specializing in building high-performance applications with React. I turn ideas into interactive, responsive, and visually appealing digital products
                        </p>
                    </div>
                </div>
            </section>

            <PortfolioGridPage />
         
            <Footer />
        </>
    );
};

export default PortfolioDetailPage;

