import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const Arbitrator = () => { 

    const galleries = [];

    return (
        <PortfolioPageLayout
            title="ENyay Setu"
            subtitle="Online Dispute Resolution & Digital Arbitration Platform."
            description="ENyay Setu is a technology-driven Online Dispute Resolution platform designed to digitize and streamline the complete arbitration lifecycle. The platform enables digital claim filing, institutional case management, virtual hearings, secure legal document management and award delivery through an integrated digital ecosystem."
            heroImage="/images/Enyaysetu/photo.png"
            tags={["Next.js", "Node.js", "PostgreSQL", "Amazon S3", "Meeting API", "Razorpay"]}
            gallery={galleries}
            bgColor="#f0f5ff"
            link="https://enyaysetu.com/"
        >


       

            <section id="enyay-setu" className="relative overflow-hidden bg-white ">

             
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-100/50 blur-[120px]"></div>
                </div>

                <div className="relative mx-auto max-w-7xl">

                  
                    <div className="grid gap-6 md:grid-cols-3 mb-5">

                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition">
                           
                            <h4 className="text-lg font-bold text-slate-900">Digital Arbitration</h4>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Structured digital workflows for claim registration,
                                arbitration proceedings, neutral appointment and
                                dispute resolution.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition">
                           
                            <h4 className="text-lg font-bold text-slate-900">Virtual Proceedings</h4>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Online meeting integration to facilitate remote hearings,
                                participant coordination and digital case proceedings.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition">
                           
                            <h4 className="text-lg font-bold text-slate-900">Secure Document Storage</h4>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Amazon S3-based document management architecture
                                for legal records, evidence, notices and awards.
                            </p>
                        </div>

                    </div>


                 
                    <div className="grid gap-12 lg:grid-cols-2 mb-5">

                        <div>
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                Project Development
                            </span>

                            <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
                                Building a Complete Digital Justice Ecosystem
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">
                                ENyay Setu transforms conventional dispute resolution
                                procedures into a structured, accessible and
                                technology-enabled digital process.
                            </p>

                            <div className="mt-8 space-y-5">

                                <div className="flex gap-4">
                                 
                                    <p className="text-sm leading-7 text-slate-700 mb-0">
                                        Responsive frontend development using Next.js
                                        and Tailwind CSS.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                  
                                    <p className="text-sm leading-7 text-slate-700 mb-0">
                                        Backend API development and business workflow
                                        management using Node.js.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                   
                                    <p className="text-sm leading-7 text-slate-700 mb-0">
                                        Virtual meeting integration for online
                                        arbitration hearings.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                  
                                    <p className="text-sm leading-7 text-slate-700 mb-0">
                                        Secure legal document upload and retrieval
                                        through Amazon S3.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                  
                                    <p className="text-sm leading-7 text-slate-700 mb-0">
                                        Digital case tracking, notifications and
                                        procedural record management.
                                    </p>
                                </div>

                            </div>
                        </div>


                   
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">

                            <span className="text-sm font-bold uppercase tracking-widest text-teal-700">
                                Technology Stack
                            </span>

                            <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                Technologies & Integrations
                            </h3>

                            <div className="mt-8 space-y-5">

                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm text-slate-600">Frontend Development</span>
                                    <span className="text-sm font-bold text-slate-900">Next.js</span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm text-slate-600">Backend Development</span>
                                    <span className="text-sm font-bold text-slate-900">Node.js</span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm text-slate-600">Virtual Meetings</span>
                                    <span className="text-sm font-bold text-slate-900">Meeting API</span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm text-slate-600">Cloud Storage</span>
                                    <span className="text-sm font-bold text-slate-900">Amazon S3</span>
                                </div>

                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm text-slate-600">UI Styling</span>
                                    <span className="text-sm font-bold text-slate-900">Tailwind CSS</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">Database</span>
                                    <span className="text-sm font-bold text-slate-900">PostgreSQL</span>
                                </div>

                            </div>
                        </div>

                    </div>


              
                    <div className="mb-16">

                        <div className="mb-12 text-center">
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                End-to-End Workflow
                            </span>

                            <h3 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
                                The 9-Stage Resolution Journey
                            </h3>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                                A structured journey illustrating how ENyay Setu
                                manages disputes from initial claim filing through
                                final enforcement documentation.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                          
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-blue-200">01</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-blue-700">Day 1–3</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Claim Filing</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Claimant registers dispute particulars and submits
                                    the statement of claim with supporting documents.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-teal-200">02</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-teal-700">Day 3–5</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Registry Intake</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    ODR registrar verifies jurisdictional eligibility,
                                    application particulars and fee payment.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-purple-200">03</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-purple-700">Day 5–7</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Rule 34 Screening</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Institutional scrutiny of the arbitration agreement
                                    and applicable clause validity requirements.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-indigo-200">04</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-indigo-700">Day 7–10</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Case Acceptance</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Formal institution of the matter and generation
                                    of a unique master docket number.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-orange-200">05</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-orange-700">Day 10–25</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Respondent Notice</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Formal summons notice delivered to the respondent
                                    with an applicable response window.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-pink-200">06</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-pink-700">Day 25–35</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Neutral Appointment</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Neutral empanelment, Section 12 disclosures
                                    and constitution of the arbitral tribunal.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-teal-200">07</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-teal-700">Day 35–75</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Hearings & Proceedings</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Virtual hearings, evidence exchange and
                                    case management through digital proceedings.
                                </p>
                                <span className="mt-4 inline-flex rounded-lg bg-teal-100 px-3 py-2 text-xs font-semibold text-teal-800">
                                    Virtual Hearing Integration
                                </span>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-amber-200">08</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-700">Day 75–90</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Award & Resolution</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Final arbitral award or mediated settlement
                                    agreement, as applicable.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                                <span className="text-4xl font-extrabold text-green-200">09</span>
                                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-green-700">Day 90+</p>
                                <h4 className="mt-2 text-lg font-bold text-slate-900">Enforcement Closure</h4>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Certified execution documentation and
                                    case closure records for further enforcement.
                                </p>
                            </div>

                        </div>
                    </div>


                 
                    <div className="mt-20 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-teal-50 p-8 text-center md:p-14">

                        <span className="text-sm font-bold uppercase tracking-widest text-teal-700">
                            Project Vision
                        </span>

                        <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                            Simplifying Dispute Resolution Through Technology
                        </h3>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                            ENyay Setu represents the convergence of legal processes
                            and modern software engineering, creating a digital
                            ecosystem for efficient case administration, accessible
                            virtual proceedings and secure legal documentation.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-blue-800">LegalTech Innovation</span>
                            <span className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-teal-800">Digital Transformation</span>
                            <span className="rounded-full border border-purple-200 bg-white px-4 py-2 text-sm text-purple-800">Full-Stack Development</span>
                        </div>

                    </div>

                </div>
            </section>

        </PortfolioPageLayout>
    );
};

export default Arbitrator;
