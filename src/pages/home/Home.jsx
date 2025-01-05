import React from 'react'
import Navbar from '../../componenets/Navbar'
import Resume from '../../componenets/Resume'
import Bio from '../../componenets/Bio'
import Service from '../../componenets/Service'
import Hero from '../../componenets/Hero'
import Footer from '../../componenets/Footer'

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

            <Footer />
        </>
    )
}

export default Home
