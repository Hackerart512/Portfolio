import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  bullets = [],
  image,
  children,
}) => {
  return (
    <>
      <Navbar bg_color="#ffe9d9" />

      <section className="bg-[#fff7ed] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block rounded-full bg-[#ffedd3] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#d46e00]">
              Service detail
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              {subtitle}
            </p>
            {description && (
              <p className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr] items-center">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#f3e1c8] bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What this service includes</h2>
                <ul className="space-y-4 text-gray-700">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#ff9330]"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {children}
            </div>

            <div className="rounded-[32px] overflow-hidden bg-[#fff3e0] p-6 shadow-[0_30px_80px_rgba(255,147,48,0.12)]">
              {image ? (
                <img src={image} alt={title} className="w-full rounded-[28px] object-cover shadow-lg" />
              ) : (
                <div className="flex h-full min-h-[360px] items-center justify-center rounded-[28px] bg-[#ffe9d0] p-8 text-center text-gray-900">
                  <div>
                    <p className="text-xl font-semibold">Visual focus area</p>
                    <p className="mt-3 text-sm text-gray-600">Add a showcase image or screenshot here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-[#333333]"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicePageLayout;
