import React from "react";

import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import GalleryLightbox from '../../components/portfolio/GalleryLightbox'
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async'

const MonisaErpPortalPage = () => {

    const galleries = ['/images/Freelancer_monisa/gallery/1.jpg', '/images/Freelancer_monisa/gallery/2.jpg', '/images/Freelancer_monisa/gallery/3.jpg', '/images/Freelancer_monisa/gallery/4.jpg', '/images/Freelancer_monisa/gallery/5.jpg', '/images/Freelancer_monisa/gallery/6.jpg', '/images/Freelancer_monisa/gallery/7.jpg', '/images/Freelancer_monisa/gallery/8.jpg', '/images/Freelancer_monisa/gallery/9.jpg', '/images/Freelancer_monisa/gallery/10.jpg', '/images/Freelancer_monisa/gallery/11.jpg', '/images/Freelancer_monisa/gallery/12.jpg', '/images/Freelancer_monisa/gallery/13.jpg', '/images/Freelancer_monisa/gallery/14.jpg', '/images/Freelancer_monisa/gallery/15.jpg', '/images/Freelancer_monisa/gallery/16.jpg', '/images/Freelancer_monisa/gallery/17.jpg', '/images/Freelancer_monisa/gallery/18.jpg', '/images/Freelancer_monisa/gallery/20.jpg', '/images/Freelancer_monisa/gallery/21.jpg', '/images/Freelancer_monisa/gallery/22.jpg', '/images/Freelancer_monisa/gallery/23.jpg', '/images/Freelancer_monisa/gallery/24.jpg', '/images/Freelancer_monisa/gallery/25.jpg', '/images/Freelancer_monisa/gallery/26.jpg', '/images/Freelancer_monisa/gallery/27.jpg', '/images/Freelancer_monisa/gallery/28.jpg'];

    return (
        <>
            <Helmet>
                <title>Monisa Freelancing Portal</title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar bg_color="#ffe9d9" />
            <section className="relative w-full overflow-hidden">
 
                <div className="breadcrum flex items-center justify-center mt-3">
                    <span className="home flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/home" className="hover:text-black transition-colors">
                            Home
                        </Link>

                        <span className="text-gray-400">›</span>

                        <Link href="/portfolios" className="hover:text-black transition-colors">
                            Portfolios
                        </Link>

                        <span className="text-gray-400">›</span>

                        <span className="text-gray-800 font-medium">
                            Monisa Freelancing Portal
                        </span>
                    </span>
                </div>
            </section>
            <section className=" px-6 py-10">

                <div className="container-fluid">

                    <img
                        src="/images/Freelancer_monisa/photo.png"
                        alt=""
                        style={{
                            borderRadius: "17px",
                            border: "4px solid #e6740c",
                        }}
                    />

                 
                    <div className="space-y-5">

                        <section className="px-6 md:px-16 py-12  text-gray-800">
                       
                            <div className="mx-auto text-center mb-12">
                                <h2 className="font-Syne font-semibold">Freelancer Portal Management System</h2>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">
                                    A role-based web platform designed to manage freelancers, projects, and revenue efficiently with automated workflows, digital verification, and analytics.
                                </p>
                            </div>

                            {/* <!-- Overview --> */}
                            <div className="mx-auto space-y-10">
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2 font-Syne">Overview</h2>
                                    <p className="text-[18px] mt-4 font-Syne text-[#08080899]">
                                        The Freelancer Portal is a comprehensive management system for organizations that handle multiple freelancers and project managers.
                                        It automates the entire process from registration and approval to task assignment, rating, invoicing, and real-time communication.
                                    </p>
                                </div>

                                {/* <!-- Roles --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-4 font-Syne">User Roles and Access Control</h2>
                                    <div className="grid md:grid-cols-2 gap-6">


                                        <div className="services-cart bg-[#0808080a] rounded-md p-4 mb-4">
                                            <h5 className="font-Syne fw-bold flex justify-between mt-3">
                                                Super Admin
                                                <span className="animate-arrow-up pl-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </h5>
                                            <p>Has full control of the platform, manages users, approves freelancers, monitors revenue, and configures system settings.</p>
                                        </div>

                                        <div className="services-cart bg-[#0808080a] rounded-md p-4 mb-4">
                                            <h5 className="font-Syne fw-bold flex justify-between mt-3">
                                                Manager
                                                <span className="animate-arrow-up pl-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </h5>
                                            <p>Acts as a middle authority; approves applications, creates projects, and handles exceptions beyond revenue limits.</p>
                                        </div>

                                        <div className="services-cart bg-[#0808080a] rounded-md p-4 mb-4">
                                            <h5 className="font-Syne fw-bold flex justify-between mt-3">
                                                Project Manager
                                                <span className="animate-arrow-up pl-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </h5>
                                            <p>Creates and manages projects, assigns tasks, reviews submissions, rates freelancers, and handles communication.</p>
                                        </div>

                                        <div className="services-cart bg-[#0808080a] rounded-md p-4 mb-4">
                                            <h5 className="font-Syne fw-bold flex justify-between mt-3">
                                                Freelancer
                                                <span className="animate-arrow-up pl-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </h5>
                                            <p className="font-Syne">Registers, signs digital contracts, accepts tasks, submits files, generates invoices, and communicates via chat.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Registration --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Registration & Approval Workflow</h2>
                                    <p className="text-gray-700 leading-relaxed font-Syne">
                                        Freelancers and Project Managers register by submitting all required details and digital documents.
                                        Upon registration, their profile remains in a <span className="font-semibold ">Pending Approval</span> state until verified by the Admin or Manager.
                                        Every approval or rejection triggers an <span className="font-semibold">automated email notification</span> ensuring real-time updates.
                                    </p>
                                </div>

                                {/* <!-- Project Management --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2 font-Syne">Project and Task Management</h2>
                                    <p className="font-Syne">
                                        Projects are created by Managers or Admins with defined revenue limits. Tasks are assigned to freelancers based on per-hour or per-word pricing.
                                        Project Managers can assign tasks up to <span className="font-semibold ">65% of the total project value</span>; beyond this limit requires Admin approval.
                                    </p>
                                </div>

                                {/* <!-- Task Workflow --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-4 font-Syne">Task Workflow</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border rounded-xl shadow-sm">
                                            <thead className="bg-[#ff9330] text-white">
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-Syne">Stage</th>
                                                    <th className="px-4 py-3 text-left font-Syne">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                                <tr><td className="px-4 py-3 font-medium">Pending</td><td className="px-4 py-3">Task created and awaiting freelancer acceptance.</td></tr>
                                                <tr><td className="px-4 py-3 font-medium">Processing</td><td className="px-4 py-3">Freelancer accepted the task and started work.</td></tr>
                                                <tr><td className="px-4 py-3 font-medium">Submitted</td><td className="px-4 py-3">Freelancer submitted completed work (DOC/PDF).</td></tr>
                                                <tr><td className="px-4 py-3 font-medium">Review</td><td className="px-4 py-3">Project Manager reviews the submitted task.</td></tr>
                                                <tr><td className="px-4 py-3 font-medium">Rework</td><td className="px-4 py-3">Task sent back with remarks for correction.</td></tr>
                                                <tr><td className="px-4 py-3 font-medium">Approved</td><td className="px-4 py-3">Task approved and marked as completed.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <!-- Rating --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Rating and Feedback System</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        After task approval, Project Managers fill a 5-question feedback form with star ratings.
                                        The average score updates the freelancer’s profile rating, influencing future task assignments and ranking visibility.
                                    </p>
                                </div>

                                {/* <!-- Payment --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Payment & Invoice System</h2>
                                    <p>
                                        Freelancers can generate <span className="font-semibold">single-task</span> or <span className="font-semibold">monthly combined invoices</span>.
                                        Invoices must be generated before the last day of each month.
                                        Dashboards display task statuses and total approved earnings in real-time.
                                    </p>
                                </div>

                                {/* <!-- Chat --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Real-Time Chat & Notifications</h2>
                                    <p>
                                        Each task includes a dedicated chat section where freelancers can communicate with Project Managers and Admins.
                                        Every chat message triggers both an <span className="font-semibold">email notification</span> and an in-dashboard alert to ensure instant communication.
                                    </p>
                                </div>

                                {/* <!-- Dashboard --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Admin Dashboard & Analytics</h2>
                                    <p>
                                        The Admin Dashboard provides real-time insights with visual charts showing:
                                    </p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                                        <li>Total Projects, Tasks (Pending, Processing, Completed)</li>
                                        <li>Revenue and Profit Distribution</li>
                                        <li>Approval rates and task success ratios</li>
                                        <li>Top-rated freelancers and active managers</li>
                                    </ul>
                                </div>

                                {/* <!-- Features --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Key Features</h2>
                                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                        <li>Role-based authentication and access control</li>
                                        <li>Freelancer onboarding with digital signature verification</li>
                                        <li>Automated email notifications for workflow events</li>
                                        <li>Task management and budget control with 65% allocation rule</li>
                                        <li>Rating and performance-based task assignment</li>
                                        <li>Invoice and payment tracking system</li>
                                        <li>Real-time task chat and admin notifications</li>
                                        <li>Graphical analytics dashboard with filters</li>
                                    </ul>
                                </div>

                                {/* <!-- Tech Stack --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Technologies Used</h2>
                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                                        <span className="bg-white shadow-sm border p-2 rounded-lg text-center">Core PHP</span>
                                        <span className="bg-white shadow-sm border p-2 rounded-lg text-center">MySql</span>
                                        <span className="bg-white shadow-sm border p-2 rounded-lg text-center">JWT Authentication</span>
                                        <span className="bg-white shadow-sm border p-2 rounded-lg text-center">SMTP / Resend</span>
                                        <span className="bg-white shadow-sm border p-2 rounded-lg text-center">eSign API</span>
                                    </div>
                                </div>

                                {/* <!-- Conclusion --> */}
                                <div>
                                    <h2 className="text-2xl font-semibold  mb-2">Conclusion</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        The Freelancer Portal is a robust, scalable solution that automates freelancer and project workflows with precision.
                                        It ensures transparency, compliance, and performance optimization through integrated communication, analytics, and approval systems.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div className="mt-10 relative">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Project Gallery</h2>

                        <GalleryLightbox card={galleries} />


                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default MonisaErpPortalPage;

