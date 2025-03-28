import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <>
            <footer className="bg-[#191e28] ">
                <div className="container">
                    <div className="row py-10">
                        <div className="col-lg-4">
                            <h3 className="font-Syne fw-bold position-relative mb-0 text-white">
                                Let's Work Together
                            </h3>
                            <div className="hero-network my-3 md:my-5 flex items-center text-white">
                                <span className="client-couter font-Syne fw-bold text-[30px] ">
                                    1+
                                </span>
                                <span className="mx-3">Year of Experiance</span>
                                <span className="mx-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                        <path d="M1 0L1 14" stroke="#080808" stroke-opacity="0.4"></path>
                                    </svg>
                                </span>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className='text-white uppercase mb-3 md:mb-5 pt-3'>Usefull Link</h5>
                                    <ul className="m-0 p-0 text-[#adadad]">
                                        <li className='mb-2'>
                                            <Link className=" text-[#adadad] mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className='  mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer'>aAbout</li>
                                        <li className='  mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer'>Services</li>
                                        <li className='  mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer'>Contact us</li>
                                        <li className='  mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer'>Blogs</li>
                                        <li className=' mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer'>Skills</li>
                                        <li className='  mb-2 font-Syne fw-bold hover:text-[#ff9330] cursor-pointer'>Education</li>

                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h5 className='text-white uppercase mb-3 mt-2 md:mt-2 md:mb-5 pt-3'>Contact</h5>
                                    <ul className="m-0 p-0 text-[#adadad]">
                                        <li className=" text-[#adadad] mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer" to="/" >
                                           Pratap Nagar Apani Dhani road, Udaipur(Rajsthan)
                                        </li>
                                        <li className=" text-[#adadad] mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer" to="/" >
                                           pavanprajapat241@gmail.com
                                        </li>

                                        <li className=" text-[#adadad] mb-2 font-Syne fw-bold hover:text-[#ff9330]  cursor-pointer" to="/" >
                                           +91 8302088852
                                        </li>


                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Copy right riserved */}
                <div className=" bg-black py-4">

                    <p className='text-white text-center mb-0'>
                        ©2025 Pavan Prajapat, All Rights Reserved
                    </p>

                </div>

            </footer>
        </>
    )
}

export default footer
