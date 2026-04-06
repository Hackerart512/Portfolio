import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Service from "../components/common/Service";
import { Code, TrendingUp, TouchApp, Bolt } from '@mui/icons-material';
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | DevPavan</title>
        <meta
          name="description"
          content="Explore the services and specialties offered by DevPavan, including responsive web development, SEO, interaction design, and lead generation." 
        />
      </Helmet>

      <Navbar bg_color="#ffe9d9" />

      <section className="bg-[#ffefd9] py-16 md:py-5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.35em] text-[#ff9330]">
              My specialties
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Services crafted for modern digital growth
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              I design responsive, performance-first websites and applications that help businesses scale. From web development and SEO to interaction design and lead generation, every service is built with usability and conversion in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-5">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/services/web-development"
              className="group rounded-[28px] border border-[#f1e4d8] bg-[#f9fafc] p-8 text-left transition hover:border-[#ff9330] hover:bg-[#fff8ec]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff5df] text-[#ff9330] shadow-sm transition group-hover:bg-[#ff9330] group-hover:text-white">
                <Code fontSize="large" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Web Development</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#444]">
                View details
                <span className="text-[#ff9330]">→</span>
              </span>
            </Link>

            <Link
              to="/services/website-seo"
              className="group rounded-[28px] border border-[#f1e4d8] bg-[#f9fafc] p-8 text-left transition hover:border-[#ff9330] hover:bg-[#fff8ec]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ff] text-[#1a73e8] shadow-sm transition group-hover:bg-[#1a73e8] group-hover:text-white">
                <TrendingUp fontSize="large" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Website SEO</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#444]">
                View details
                <span className="text-[#ff9330]">→</span>
              </span>
            </Link>

            <Link
              to="/services/interaction-design"
              className="group rounded-[28px] border border-[#f1e4d8] bg-[#f9fafc] p-8 text-left transition hover:border-[#ff9330] hover:bg-[#fff8ec]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0b72ec] shadow-sm transition group-hover:bg-[#0b72ec] group-hover:text-white">
                <TouchApp fontSize="large" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Interaction design</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#444]">
                View details
                <span className="text-[#ff9330]">→</span>
              </span>
            </Link>

            <Link
              to="/services/lead-generation"
              className="group rounded-[28px] border border-[#f1e4d8] bg-[#f9fafc] p-8 text-left transition hover:border-[#ff9330] hover:bg-[#fff8ec]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0fff3] text-[#18a35c] shadow-sm transition group-hover:bg-[#18a35c] group-hover:text-white">
                <Bolt fontSize="large" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Lead Generation</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#444]">
                View details
                <span className="text-[#ff9330]">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-5">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="rounded-[32px] border border-[#f5e5d8] bg-[#fff9f2] p-8 shadow-[0_25px_60px_rgba(255,147,48,0.12)]">
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Why work with me?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I combine clean design, fast frontend development, and smart backend integrations to deliver polished digital products. Every project is responsive, accessible, and tailored to your brand voice.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#ff9330]"></span>
                  Custom interfaces that adapt to every screen size.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#ff9330]"></span>
                  Conversion-focused interactions and clear user journeys.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#ff9330]"></span>
                  Reliable backend logic, APIs, and performance optimization.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#ff9330]"></span>
                  SEO-ready development and better visibility for your business.
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="rounded-[32px] bg-[#faf3e8] p-8 shadow-sm border border-[#f2e6d7]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I offer</h3>
                <p className="text-gray-700 leading-relaxed">
                  This page showcases my core services, detailed with the design thinking and technical execution behind each offering.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white p-6 border border-[#f1e4d8] shadow-sm">
                  <h4 className="font-semibold text-xl mb-3">Responsive Web Development</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Modern UI built with React and scalable backend solutions that adapt to every device.
                  </p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-[#f1e4d8] shadow-sm">
                  <h4 className="font-semibold text-xl mb-3">Interaction Design</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Intuitive digital experiences with polished transitions, clear CTAs, and strong visual hierarchy.
                  </p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-[#f1e4d8] shadow-sm">
                  <h4 className="font-semibold text-xl mb-3">SEO & Growth</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Fast, SEO-aware pages designed for search visibility and long-term traffic growth.
                  </p>
                </div>
                <div className="rounded-[28px] bg-white p-6 border border-[#f1e4d8] shadow-sm">
                  <h4 className="font-semibold text-xl mb-3">Lead Generation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Lead capture flows, performance landing pages, and marketing-ready UX for conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />

      <section className="bg-[#ffe9d9] py-5 md:py-5">
        <div className="container mx-auto px-6">
          <div className="rounded-[32px] bg-white p-10 md:p-14 shadow-[0_28px_80px_rgba(255,147,48,0.12)]">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Ready to launch your next project?
                </h2>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  Let’s build a product that looks great, performs well, and grows your business with a clean, modern web presence.
                </p>
              </div>
              <div>
                              <a href="tel:8302088852" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#333333] float-right">
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
