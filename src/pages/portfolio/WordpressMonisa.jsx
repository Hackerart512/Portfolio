import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const WordpressMonisa = () => {

  const galleries = [];

  return (
    <PortfolioPageLayout
      title="WordPress Monisa"
      subtitle="A polished WordPress website for Monisa’s brand identity, content storytelling, and service promotion."
      description="This web project showcases a fully responsive WordPress build with clean layout, content-driven pages, and visual branding."
      heroImage="/images/Monisa wordpress/home page.png"
      tags={["WordPress", "Web Design", "Branding"]}
      gallery={galleries}
      bgColor="#f7f2ff"
      link="https://monisaenterprise.com/"
    >

      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            WordPress Technical Audit & Website Optimization
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Performed a complete technical audit of the WordPress website
            to identify and resolve technical issues. Fixed multiple
            redirect chains, removed orphan pages, optimized website
            performance, and improved script loading. Reduced unnecessary
            plugins and resolved plugin conflicts to ensure better
            website stability and maintainability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Dynamic Services & Portfolio Development
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed dynamic service and sub-service pages using
            custom fields and WordPress plugins. Implemented reusable
            page templates to manage parent services and child service
            pages dynamically. Created dynamic portfolio functionality
            with structured content management and a portfolio
            submission form that automatically downloads a PDF after
            successful form submission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Blog Layout & Page Structure Redesign
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Redesigned the blog page layout and improved the overall
            content presentation. Updated parent and child page layouts
            to maintain consistent styling, better content hierarchy,
            and improved navigation throughout the website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Performance, SEO & Functionality Improvements
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Conducted a complete WordPress technical SEO audit.</li>
            <li>Fixed multiple redirects and redirect chains.</li>
            <li>Identified and resolved orphan page issues.</li>
            <li>Optimized website speed and JavaScript/CSS loading.</li>
            <li>Reduced unnecessary plugins and resolved compatibility conflicts.</li>
            <li>Implemented dynamic parent and child service pages using custom fields.</li>
            <li>Created dynamic portfolio pages and PDF download functionality.</li>
            <li>Redesigned blog layouts and improved parent-child page navigation.</li>
            <li>Improved responsive design and overall user experience.</li>
          </ul>
        </div>
      </section>

    </PortfolioPageLayout>
  );
};

export default WordpressMonisa;
