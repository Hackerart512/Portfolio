import { GitHub, Instagram, LinkedIn, WhatsApp } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="hero-section bg-[#ffe9d9]">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="py-3 py-lg-5">

                                <span className="font-Syne text-dark fw-bold lh-1 text-2xl d-flex flex-wrap align-items-center hello-iam aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">

                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                                            <path d="M0 1H65" stroke="#080808"></path>
                                        </svg>
                                    </span>

                                    Hello, I'm															<img className="ml-2" decoding="async" src="images/victory.png" alt="" />
                                </span>

                                <h1 className="hero-title font-Syne fw-bold position-relative mb-0  mt-3 md:mt-0" >
                                    Pavan <br />Prajapat
                                </h1>

                                <p className="font-Syne fw-bold text-[15px] md:text-[20px] mt-3">Full Stack Developer | India-Based Professional</p>

                                <div className="hero-button-group mt-2">
                                    <a href="tel:8302088852" className="text-white bg-black inline-block rounded-md contact-link px-3 py-2 px-lg-4  py-lg-3">
                                        <div className="font-bold flex items-center">
                                            Let's Talk
                                            <span className="animate-arrow-up pl-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </a>

                                    <Link to="/" className="text-black bg-[trabsparent]  inline-block rounded-md px-3 py-2 px-lg-4 py-lg-3 contact-link mt-2 ml-3 border-1 border-black">
                                        <div className="font-bold flex items-center  rounded-sm ">
                                            My Work
                                            <span className="animate-arrow-up pl-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>

                                </div>

                                <div className="hero-network my-3 md:my-5 flex items-start flex-col md:flex-row md:items-center">

                                    <div className='flex items-center'>
                                        <span className="client-couter font-Syne fw-bold text-[30px] ">
                                            1+
                                        </span>

                                        <span className="md:mx-3">Year of Experiance</span>
                                        <span className="mx-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                                <path d="M1 0L1 14" stroke="#080808" stroke-opacity="0.4"></path>
                                            </svg>
                                        </span>
                                    </div>


                                    <div className="social-links">
                                        <ul className="mb-0 gap-3 d-flex flex-wrap align-items-center list-unstyled">
                                            <li>
                                                <a href="https://www.behance.net/" className="text-dark">
                                                    <Instagram />


                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.linkedin.com/in/pavan-prajapat-77ba26226/" className="text-dark">
                                                    <LinkedIn />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://wa.me/918302088852?text=Hello%20pavan" className="text-dark">
                                                    <WhatsApp />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://github.com/Hackerart512" className="text-dark">
                                                    <GitHub />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img style={{ "aspect-ratio": "1/1", objectFit: "contain" }} src="/images/profile/profile-boy.png" className="h-100 w-100" alt="" title="" decoding="async" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
