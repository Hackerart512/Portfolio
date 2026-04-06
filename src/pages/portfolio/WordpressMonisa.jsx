import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const WordpressMonisa = () => {
  return (
    <PortfolioPageLayout
      title="WordPress Monisa"
      subtitle="A polished WordPress website for Monisa’s brand identity, content storytelling, and service promotion."
      description="This web project showcases a fully responsive WordPress build with clean layout, content-driven pages, and visual branding."
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      tags={["WordPress", "Web Design", "Branding"]}
      bgColor="#f7f2ff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Custom WordPress Design</h2>
          <p className="text-gray-700 leading-relaxed">
            The website was created with a focus on professional branding, accessibility,
            and easy content management using WordPress as the CMS.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Service Pages and Content Flow</h2>
          <p className="text-gray-700 leading-relaxed">
            Content sections are structured to present offerings clearly, build trust,
            and guide visitors toward contact or inquiry actions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Performance and SEO Readiness</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Responsive Hero sections with CTAs</li>
            <li>Optimized navigation and page load experience</li>
            <li>Blog-ready design for long-term content growth</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default WordpressMonisa;
