import { GitHub, Instagram, LinkedIn, WhatsApp, Telegram } from '@mui/icons-material';
import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { animateSplitText } from "../../utils/animateSplitText";

const Hero = () => {

    const { firstName, lastName, experience, contactNumber, instagram, linkedin, github, telegram } = useSelector((state) => state.profile);
    const heroRef = useRef(null);

    useEffect(() => {
        animateSplitText(".split-animate");

        const updatePosition = () => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const progress = Math.max(-0.5, Math.min(1, -rect.top / Math.max(rect.height, 1)));
            heroRef.current.style.setProperty('--hero-scroll-y', `${progress * 55}px`);
            heroRef.current.style.setProperty('--hero-scroll-x', `${progress * 24}px`);
        };

        updatePosition();
        window.addEventListener('scroll', updatePosition, { passive: true });
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
        <>
            <section ref={heroRef} className="hero-section relative overflow-hidden bg-[#fff4eb]">
                <div className="hero-grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
                <span className="hero-orb hero-orb-one absolute rounded-full" aria-hidden="true" />
                <span className="hero-orb hero-orb-two absolute rounded-full" aria-hidden="true" />
                <span className="hero-outline-circle absolute rounded-full" aria-hidden="true" />
                <div className="container relative z-[2]">
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

                                <h1 className="split-animate hero-title font-Syne fw-bold position-relative mb-0  mt-3 md:mt-0" >
                                    {firstName} <br />{lastName}
                                </h1>

                                <p className="font-Syne fw-bold text-[15px] md:text-[20px] mt-3">Full Stack Developer | India-Based Professional</p>

                                <div className="hero-button-group mt-2">
                                    <a href={`tel:${contactNumber}`} className="text-white bg-black inline-block rounded-3xl contact-link px-3 py-2 px-lg-4 py-lg-3">
                                        <div className="font-bold flex items-center">
                                            Hire Me
                                            <span className="animate-arrow-up pl-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </a>

                                    <Link to="/it-services" className="text-black bg-transparent inline-block rounded-3xl px-3 py-2 px-lg-4 py-lg-3 contact-link mt-2 ml-3 border border-black">
                                        <div className="font-bold flex items-center  rounded-sm ">
                                            Work With Us
                                            <span className="animate-arrow-up pl-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>

                                </div>

                                <div className="hero-network my-3 md:my-5 flex items-start flex-col md:flex-row md:items-center">

                                    <div className='flex items-center'>
                                        <span className="client-couter font-Syne fw-bold text-[30px] ">
                                            {experience}
                                        </span>

                                        <span className="md:mx-3">Year of Experiance</span>
                                        <span className="mx-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                                <path d="M1 0L1 14" stroke="#080808" strokeOpacity="0.4"></path>
                                            </svg>
                                        </span>
                                    </div>


                                    <div className="social-links">
                                        <ul className="mb-0 gap-3 d-flex flex-wrap align-items-center list-unstyled">
                                            <li>
                                                <a href={instagram} className="text-dark">
                                                    <Instagram />


                                                </a>
                                            </li>

                                            <li>
                                                <a href={linkedin} className="text-dark">
                                                    <LinkedIn />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={telegram} className="text-dark">
                                                    <Telegram />
                                                </a>
                                            </li>

                                            <li>
                                                <a href={github} className="text-dark">
                                                    <GitHub />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img style={{ aspectRatio: "1/1", objectFit: "contain" }} src="/images/profile/profile-boy.png" className="hero-profile h-100 w-100" alt={`${firstName} ${lastName}`} title={`${firstName} ${lastName}`} decoding="async" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
