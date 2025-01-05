import React, { useState } from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import AboutSec from '../componenets/AboutSec'

import { Helmet } from 'react-helmet-async'

const About = () => {


    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Helmet>
                <title>About us - Personal Portfolio</title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar />
            <AboutSec />

            {/* Bio */}
            <section className="py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="hero-title font-Syne fw-bold position-relative mb-0 ">
                                My vision is to create happy my clients
                            </h3>

                            <p className="text-[18px] mt-4 font-Syne text-[#08080899]">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.</p>


                            <div className="my-personal-content">
                                <ul className='p-0 flex items-center gap-4'>
                                    <li >
                                        <span className="font-Syne fw-bold text-[30px]">08</span>
                                        <p className='font-Poppins'>Award Winner</p>
                                    </li>
                                    <li>
                                        <span className="font-Syne fw-bold text-[30px]">1.3</span>
                                        <p className='font-Poppins'>Year Of Experiance</p>
                                    </li>
                                    <li>
                                        <span className="font-Syne fw-bold text-[30px]">3.1</span>
                                        <p className='font-Poppins'>Year Of Hand on Experiance</p>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="pl-5">
                                <span className='d-block relative font-Syne fw-bold text-[60px] before:content-[""] before:absolute before:h-[70px] before:w-[70px] before:bg-[#FFB646] before:top-1 before:rounded-full before:z-[-1]'>1.2+</span>

                                <span className="strock-text">
                                    Years of <br />
                                    experience
                                </span>
                                <div className="bg-black rounded-md p-4 my-4 flex justify-between flex-col flex-wrap cursor-pointer">

                                    <div class="text-[#ff9330] ">
                                        <span className="animate-arrow-up pl-2 float-right">
                                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="">

                                        <span className="font-Syne font-bold text-[#ff9330]">Say Hello!</span>
                                        <div className="hero-title font-Syne font-bold relative mb-0 text-white text-[1.5rem]">

                                            <p className="font-Poppins"><a className="text-white" href="mailto:Vickyprajapat@gmail.com">Vickyprajapat@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Resume */}
            <section className='py-10 bg-[#0000000a]'>
                <div className="container">

                    <span className="font-Syne fw-bold text-[#ff9330] text-center d-block">Resume</span>
                    <h3 className="hero-title font-Syne fw-bold position-relative mb-0 text-center">
                        All over my details find here...
                    </h3>

                    <ul className='flex gap-3 m-0 p-0 my-4 items-center justify-center'>
                        <li onClick={() => handleTabClick('tab1')} className={`cursor-pointer flex px-4 py-3 justify-between rounded-md font-Syne fw-bold mb-2 ${activeTab === 'tab1' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>
                            About Me
                            <span className="animate-arrow-up pl-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </li>
                        <li onClick={() => handleTabClick('tab2')} className={`cursor-pointer flex px-4 py-3 justify-between rounded-md font-Syne fw-bold mb-2 ${activeTab === 'tab2' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>
                            Experiance
                            <span className="animate-arrow-up pl-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </li>
                        <li onClick={() => handleTabClick('tab3')} className={`cursor-pointer flex  px-4 py-3 justify-between rounded-md font-Syne fw-bold mb-2 ${activeTab === 'tab3' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>
                            Education
                            <span className="animate-arrow-up pl-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </li>
                        <li onClick={() => handleTabClick('tab4')} className={`cursor-pointer flex  px-4 py-3 justify-between rounded-md font-Syne fw-bold mb-2 ${activeTab === 'tab4' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>
                            Skills
                            <span className="animate-arrow-up pl-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </li>
                        <li onClick={() => handleTabClick('tab5')} className={`cursor-pointer flex px-4 py-3 justify-between rounded-md font-Syne fw-bold mb-2 ${activeTab === 'tab5' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>Extra Activities
                            <span className="animate-arrow-up pl-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </li>
                    </ul>




                    {

                        activeTab === 'tab1' &&
                        <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    <h4 className="font-Syne fw-bold text-[23px]">About Me</h4>
                                    <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Mark Henry, Product Designer, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>

                                    <p className="text-[18px] mt-4 font-Syne text-[#08080899]">but words that truly land with those that read them, calling your audience in and making them want more.</p>

                                    <div className="resune-bio">
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] mt-3 font-Poppins col-lg-3">Name</p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                Pavan Prajapat
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] mt-3 font-Poppins col-lg-3">Nationality</p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                India
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] mfont-Poppins  col-lg-3">Phone</p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                8302088852
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] font-Poppins  col-lg-3">Email</p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                pavanprajapat241@gmail.com
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] font-Poppins  col-lg-3">Experience</p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                1.2
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] font-Poppins  col-lg-3">Freelance
                                            </p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                Available
                                            </span>
                                        </div>
                                        <div className="d-flex items-center">
                                            <p className="text-[20px] font-Poppins  col-lg-3">Language
                                            </p>
                                            <span className="font-Syne fw-bold text-[20px]">
                                                8302088852
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    }

                    {
                        activeTab === 'tab2' &&
                        <div>
                            <h4 className="font-Syne fw-bold text-[23px]">Experiance</h4>

                            <div className="experiance-container mt-4">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <small>06/2024 – Running</small>

                                            <p className="dot_  relative pl-3 mt-4 mb-4">Webtter Internet Solution ( Ecommerce Management, Php, Laravel )</p>

                                            <h4 className="font-Syne fw-bold flex justify-between mt-3">
                                                Full Stack Web Developer

                                            </h4>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">

                                            <small>06/2023 – 6/2024</small>

                                            <p className="dot_  relative pl-3 mt-4 mb-4">Raza Web Tech (Core PHP, Wordpress, React.js)</p>

                                            <h4 className="font-Syne fw-bold flex justify-between mt-3">
                                                Lead Genration

                                            </h4>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    }
                    {
                        activeTab === 'tab3' &&
                        <div>
                            <h4 className="font-Syne fw-bold text-[23px]">Education</h4>

                            <div className="education-container mt-4">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <small>07/2020 - 7/2024</small>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p className="dot_  relative pl-3 mb-4">Aravali Institute Of Technical Studies.</p>

                                                    <h4 className="font-Syne fw-bold flex justify-between mt-3">
                                                        B. Tech ( Computer Science & Engineering. )
                                                    </h4>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <small>07/2017 - 03/2018</small>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p className="dot_  relative pl-3 mb-4">Gyan Mandir Senior Secondary School ( 12<sup>th</sup> )</p>

                                                    <h4 className="font-Syne fw-bold flex justify-between mt-3">
                                                        PCM ( Physics, Chemistry and Math )
                                                    </h4>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <small>07/2019 - 03/2020</small>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p className="dot_  relative pl-3 mb-4">Shiksha Niketan Senior Secondary School ( 10<sup>th</sup> )</p>

                                                    <h4 className="font-Syne fw-bold flex justify-between mt-3">
                                                        All Subjects
                                                    </h4>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                    {
                        activeTab === 'tab4' &&
                        <div>
                            <h4 className="font-Syne fw-bold text-[23px]">Skills</h4>

                            <div className="skills-container mt-4">

                                <div className="row">

                                    <div className="col-lg-3">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img src="./images/skils_logo/react.png" alt="" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <h4 className="font-Syne fw-bold mb-0">
                                                        React JS
                                                    </h4>
                                                    <p className=" relative mb-0">(90%)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img src="./images/skils_logo/laravel.png" alt="" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <h4 className="font-Syne fw-bold mb-0">
                                                        Laravel
                                                    </h4>
                                                    <p className=" relative mb-0">(90%)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img src="./images/skils_logo/wordpress.png" alt="" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <h4 className="font-Syne fw-bold mb-0">
                                                        Wordpress
                                                    </h4>
                                                    <p className=" relative mb-0">(70%)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="services-cart bg-[#0808080a] rounded-xl p-4 mb-3">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img src="./images/skils_logo/canva.png" alt="" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <h4 className="font-Syne fw-bold mb-0">
                                                        Canva
                                                    </h4>
                                                    <p className=" relative mb-0">(70%)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    }
                    {
                        activeTab === 'tab5' &&
                        <div>
                            <h4 className="font-Syne fw-bold text-[23px]">Extra Activities</h4>
                        </div>
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About
