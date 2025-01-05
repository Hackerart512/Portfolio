import React from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img style={{ "aspect-ratio": "1/1", objectFit: "contain" }} src="/images/profile/officeboy.png" className="h-100 w-100" alt="" title="" decoding="async" />
                        </div>
                        <div className="col-lg-6">
                            <span className="font-Syne fw-bold text-[#ff9330]">Hello I'm</span>

                            <h3 className="font-Syne fw-bold position-relative mb-0 ">
                                Pavan Prajapat, Full stack web developer
                            </h3>

                            <p className="text-[18px] mt-4 font-Syne text-[#08080899]">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.</p>

                            <div className="my-personal-content">
                                <ul className='p-0 flex items-center gap-3 md:gap-4 flex-wrap mb-4 md:mb-0'>
                                    <li>
                                        <span className="font-Syne fw-bold text-[30px]">08</span>
                                        <p className='font-Poppins mb-0'>Award Winner</p>
                                    </li>
                                    <li>
                                        <span className="font-Syne fw-bold text-[30px]">1.3</span>
                                        <p className='font-Poppins mb-0'>Year Of Experiance</p>
                                    </li>
                                    <li>
                                        <span className="font-Syne fw-bold text-[30px]">3.1</span>
                                        <p className='font-Poppins mb-0'>Year Of Hand on Experiance</p>
                                    </li>

                                </ul>
                            </div>

                            <Link to="/" className="text-white bg-black inline-block rounded-md px-4 py-3 contact-link  hover:bg-[transparent] font-Syne">
                                <div className="font-bold flex items-center">
                                    Download My Resume
                                    <span className="animate-arrow-up pl-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bio
