import React, { useState } from 'react';

const Resume = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <section className=" bg-[#f5f5f5] py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <span className="font-Syne fw-bold text-[#ff9330]">Resume</span>

                            <h3 className="hero-title font-Syne fw-bold position-relative mb-0 ">
                                All over my details find here...
                            </h3>

                            <div className="row">
                                <div className="col-lg-9">
                                    <ul className='resume-tab m-0 p-0 my-4'>
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
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-7">
                            {

                                activeTab === 'tab1' &&

                                <div>
                                    <h4 className="font-Syne fw-bold text-[23px]">About Me</h4>
                                    <p className="text-[20px] mt-3 font-Poppins">Mark Henry, Product Designer, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>

                                    <p className="text-[20px] mt-3 font-Poppins">but words that truly land with those that read them, calling your audience in and making them want more.</p>

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

                                            <div className="col-lg-4">
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

                                            <div className="col-lg-4">
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

                                            <div className="col-lg-4">
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

                                            <div className="col-lg-4">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
