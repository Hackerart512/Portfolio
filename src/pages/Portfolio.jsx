import React, { useState, useEffect } from "react";

import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import GalleryLightbox from '../componenets/GalleryLightbox'

import { Helmet } from 'react-helmet-async'
import { getById } from "../api/Api";
import { useParams } from "react-router-dom";

const PortfolioDetailPage = () => {


    const { id } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        getById(id).then(setCard);
    }, [id]);


    const renderProjectDetails = () => {
        switch (parseInt(id)) {
            case 1:
                return (
                    <>
                        <section className="px-6 md:px-16 py-12  text-gray-800">
                            {/* <!-- Title --> */}
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

                    </>
                );

            case 2:
                return (
                    <>
                        <section className="space-y-6">
                            {/* Project Title */}
                            <h2 className="text-3xl font-semibold">KPI & LMS Performance Portal</h2>

                            {/* Overview */}
                            <p className="text-gray-700 leading-relaxed">
                                The KPI & LMS Portal is an integrated platform designed to measure, manage, and improve
                                employee performance while providing structured learning through an advanced LMS system.
                                The system includes a hierarchical role structure for Super Admins, Managers, Executives,
                                and Employees, ensuring complete visibility and accountability across all organizational levels.
                            </p>

                            {/* Role Hierarchy */}
                            <h2 className="text-2xl font-semibold">Role Hierarchy & Access Control</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Each user in the system has a defined role and visibility based on hierarchy.
                                The Super Admin can access all data, including performance analytics of every
                                employee, manager, and executive. Managers can view and evaluate their respective
                                executives and employees, while Executives oversee their team members.
                                Role-based permissions ensure data privacy and controlled functionality across the platform.
                            </p>

                            {/* Dashboard & Analytics */}
                            <h2 className="text-2xl font-semibold">Dashboard & Analytics</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The dynamic dashboard displays key organizational metrics including total employees,
                                managers, and executives. It highlights the top 3 and worst 3 performers in real-time,
                                alongside monthly performance averages represented through interactive bar charts
                                showing performance percentages. This visualization helps leadership teams quickly
                                assess overall productivity and performance trends.
                            </p>

                            {/* Team & Task Assignment */}
                            <h2 className="text-2xl font-semibold">Team & Task Assignment</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Super Admins and Managers can assign employees to specific teams and track their
                                assigned tasks and learning progress. Executives have visibility into their
                                assigned team members and their ongoing tasks. The system supports a clear
                                chain of command, ensuring effective task delegation and team coordination.
                            </p>

                            {/* Learning Management System */}
                            <h2 className="text-2xl font-semibold">Learning Management System (LMS)</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The LMS module allows admins to create structured courses with a folder and subfolder
                                hierarchy—forming a complete playlist of learning materials. Each video module tracks
                                completion progress (e.g., if 7 out of 10 videos are completed, progress shows as 70%).
                                Videos cannot be skipped or fast-forwarded, ensuring genuine engagement.
                                Users can also bookmark sections for easy revisiting, and all activity is tracked in
                                the dashboard for both employees and their managers.
                            </p>

                            {/* KPI Management */}
                            <h2 className="text-2xl font-semibold">KPI Assignment & Evaluation</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The KPI (Key Performance Indicator) module enables managers and admins to assign
                                monthly KPIs to employees with a weighted scoring system. Employees can provide
                                self-evaluations, followed by manager and admin reviews to calculate an overall
                                average KPI score. Performance trends and scores are visualized through monthly
                                bar charts to identify top and underperforming employees.
                            </p>

                            {/* KPI Review & Revisions */}
                            <h2 className="text-2xl font-semibold">KPI Review & Revisions</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Employees can request KPI edits or revisions, which are subject to approval by
                                managers and the admin team. The system supports a structured Q&A format within
                                each KPI evaluation—where assigners can add questions and employees can provide
                                responses—allowing deeper insight into each performance metric.
                            </p>

                            {/* Glossary & Knowledge Hub */}
                            <h2 className="text-2xl font-semibold">Glossary & Knowledge Hub</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The platform includes a centralized glossary module where only Super Admins can
                                add terms, definitions, and knowledge resources. All team members can access
                                this glossary to maintain consistent understanding of company standards, KPIs,
                                and training concepts.
                            </p>

                            {/* Role & Team Management */}
                            <h2 className="text-2xl font-semibold">Role & Team Management</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Super Admins have full control to manage roles, create new teams, and add employees
                                or managers. Permissions are strictly role-based, ensuring that each user can
                                access only the features relevant to their position and authority level.
                            </p>

                            {/* Summary */}
                            <h2 className="text-2xl font-semibold">Summary</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The KPI & LMS Portal delivers a comprehensive, data-driven approach to employee
                                performance management and professional development. By combining task tracking,
                                course completion analytics, KPI scoring, and hierarchical dashboards, it empowers
                                organizations to identify top performers, address performance gaps, and foster
                                a culture of continuous growth and accountability.
                            </p>
                        </section>

                    </>
                );

            default:
                return (
                    <>
                        <h2 className="text-2xl font-semibold">About This Project</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Monisa Freelancing Portal is a modern platform connecting freelancers and clients with
                            powerful tools for collaboration, project management, and secure payments.
                            Built using the MERN stack, it ensures performance, scalability, and a clean user experience.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The portal includes real-time chat, wallet-based transactions, job bidding, and user profile systems.
                            It is designed to simplify freelance hiring and project tracking.
                        </p>
                    </>
                );
        }
    };



    if (!card) return <div className="text-center p-10">Loading...</div>;

    return (
        <>
            <Helmet>
                <title>{card.title}</title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar bg_color="#ffe9d9" />
            <section className="relative w-full overflow-hidden">

                <div className="   flex items-center justify-center py-5">
                    <h1 className="text-4xl md:text-5xl font-bold   text-center">
                        {card.title}
                    </h1>
                </div>
            </section>
            <section className=" px-6 py-10">

                <div className="container">

                    <img
                        src={card.image}
                        alt=""
                        style={{
                            borderRadius: "17px",
                            border: "4px solid #e6740c",
                        }}
                    />



                    <div className="flex flex-wrap gap-3 mb-5">
                        {card.tags?.map((t, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-5">

                        {renderProjectDetails()}

                    </div>

                    <div className="mt-10 relative">
                        <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>

                        <GalleryLightbox card={card.gallery} />


                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PortfolioDetailPage;
