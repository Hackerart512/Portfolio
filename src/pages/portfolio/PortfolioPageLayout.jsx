import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import GalleryLightbox from "../../components/portfolio/GalleryLightbox";
import CallToAction from "../../components/common/CallToAction";

const PortfolioPageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  tags = [],
  gallery,
  bgColor = "#ffe9d9",
  link,
  children,
}) => {

  const [visibleCount, setVisibleCount] = useState(8);
  const [showAllTags, setShowAllTags] = useState(false);

  const visibleTags = showAllTags ? tags : tags.slice(0, 5);


  return (
    <>
      <Helmet>
        <title>{title} | Portfolio</title>
        <meta name="description" content={description || title} />
      </Helmet>

      <Navbar bg_color={bgColor} />

      <section className="relative w-full overflow-hidden">
        <div className="breadcrum flex items-center justify-center mt-3">
          <span className="home flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <Link to="/" className="hover:text-black transition-colors">
              Portfolio
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800 font-medium">{title}</span>
          </span>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-14">
            <div>
              <span className="font-Syne fw-bold text-[#ff9330] text-sm uppercase tracking-[0.25em]">
                Featured Project
              </span>
              <h1 className="portfolio-heading text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-gray-700 leading-relaxed">
                {subtitle}
              </p>
              {description && (
                <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {visibleTags.map((tag, index) => (
                  <span key={index} className="rounded-full bg-[#ffeed8] px-4 py-2 text-sm font-medium text-[#843f00]">
                    {tag}
                  </span>
                ))}

                {tags.length > 5 && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="mt-3 text-sm font-medium text-blue-600"
                  >
                    {showAllTags ? "Show Less" : "Read More"} <span className="text-[#ff9330]">→</span>
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden bg-white shadow-2xl border border-[#f2e6d7]">
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full  min-h-[320px]"
                />
              </Link>
            </div>
          </div>

          {children}

          {gallery && gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-center mb-8">Project Gallery</h2>
              <GalleryLightbox card={gallery.slice(0, visibleCount)} />
            </div>
          )}

          {
            gallery.length > visibleCount && (

              <div className="button-groups w-100 text-center mt-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 8)}
                  className="load-more-gallery border border-dark px-3 py-2 rounded-md"
                >
                  Load More
                </button>
              </div>
            )
          }

        </div>
      </section>

      <CallToAction />
      <Footer />
    </>
  );
};

export default PortfolioPageLayout;

