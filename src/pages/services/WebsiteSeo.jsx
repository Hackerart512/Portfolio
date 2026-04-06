import React from "react";
import ServicePageLayout from "./ServicePageLayout";

const WebsiteSeo = () => {
  return (
    <ServicePageLayout
      title="Website SEO"
      subtitle="Search-ready websites that attract traffic and improve visibility online."
      description="I build SEO-aware pages with optimized structure, fast load times, and content that search engines can easily understand."
      bullets={[
        "Optimized page titles, meta descriptions, and content structure",
        "Speed improvements for both desktop and mobile experiences",
        "Keyword-aware layouts and accessibility best practices",
        "Technical SEO foundations for long-term search performance",
      ]}
      image="/images/logo.png"
    >
      <div className="rounded-[28px] bg-[#f8f6ff] p-8 border border-[#ded8f3]">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">SEO-first development approach</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every page is built with clean HTML structure, clear headings, and thoughtful content placement so search crawlers can rank your website with confidence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I also focus on performance, semantic markup, and readability so your site delivers value to both users and search engines.
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default WebsiteSeo;
