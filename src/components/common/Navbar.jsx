import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const [humburgerToggle, setHumBurgerToggle] = useState(false);
    const { contactNumber } = useSelector((state) => state.profile);
    const isDark = props.bg_color === '#111827';

    const toggleIcon = () => {
        setHumBurgerToggle(!humburgerToggle);
    }

    return (
        <>
            <header style={{ backgroundColor: props.bg_color || '#fff4eb' }}>
                <div className="container-fluid px-4 md:px-6">
                    <div className={`flex items-center justify-between border-b py-3 ${isDark ? 'border-white/10' : 'border-[#d8d5d1]'}`}>
                        <Link to="/" className="no-underline">
                            <div className="flex items-center gap-2">
                                <img width="44" height="44" src="/images/asdflogo.png" alt="DevPavan logo" className="object-contain" />
                                <span className={`font-Syne text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#171a24]'}`}>DevPavan</span>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
                            {[['Home', '/'], ['Portfolio', '/portfolios'], ['Services', '/services'], ['About', '/about-us'], ['Contact', '/contact']].map(([label, to]) => (
                                <Link key={to} to={to} className={`text-[15px] font-bold no-underline transition-colors hover:text-[#ff9330] ${isDark ? 'text-white' : 'text-[#171a24]'}`}>
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <Link
                                to="/portfolios"
                                className={`hidden items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-bold text-[#111827] no-underline transition-all md:inline-flex ${isDark ? 'bg-[#ff9330] hover:bg-white' : 'bg-[#171a24] text-white hover:bg-[#ff9330]'}`}
                            >
                                Portfolio
                                <i className="fa-solid fa-arrow-right text-[9px]" aria-hidden="true" />
                            </Link>
                            <a href={`tel:${contactNumber}`} aria-label="Call Pavan" className="hidden text-[#171a24] no-underline md:block lg:hidden">
                                <i className="fa-solid fa-phone" aria-hidden="true" />
                            </a>
                            <div className={`hamburger md:hidden ${humburgerToggle ? 'active' : ''}`} onClick={toggleIcon} aria-label="Toggle menu">
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`popup h-[100vh] overflow-hidden position-fixed top-0 right-0 z-1 ${humburgerToggle ? 'show' : ''}`}>
                <div className="row">

                    <div className="col-lg-12 bg-[black]">
                        <div className="side-bar-header flex justify-between items-center py-3 px-4">
                            <div className="">
                                <div className="logo flex align-items-center justify-center flex-col">
                                    <img width="50" src="/images/logo_light.png" alt="logo" />
                                    <span className="text-[#ff9330] text-center block font-Syne fw-bold">DevPavan</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="ml-4">
                                    <div className={`hamburger ${humburgerToggle ? 'active' : ''}`} onClick={toggleIcon}>
                                        <span className="hamburger-line text-white"></span>
                                        <span className="hamburger-line text-white"></span>
                                        <span className="hamburger-line text-white"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-body px-4 mt-10 h-[100vh]">
                            <ul className='m-0 p-0'>
                                <li >
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/">
                                        Home
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/about-us">
                                        About
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to='/services'>
                                        Services
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='contact-linkpy-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to='/portfolios'>
                                        Project
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/blogs">
                                        Blog
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li> */}
                                <li >
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/contact">
                                        Contact
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
