import React from "react";
import ServicePageLayout from "./ServicePageLayout";

const LeadGeneration = () => {
  return (
    <ServicePageLayout
      title="Lead Generation"
      subtitle="High-converting digital experiences that turn visitors into qualified leads."
      description="I design and launch landing pages, contact flows, and CTA-driven experiences that help you capture more leads."
      bullets={[
        "Clear, conversion-focused messaging and layouts",
        "Contact forms, lead magnets, and funnel-ready design",
        "Fast-loading pages built for both desktop and mobile",
        "A/B friendly design that can scale with your campaigns",
      ]}
      image="/images/logo2_.png"
    >
      <div className="rounded-[28px] bg-[#f4fff7] p-8 border border-[#d9f3e2]">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Growing leads with smarter UX</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lead generation pages should feel trustworthy and persuasive without being pushy. I create simple, user-first funnels that encourage actions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This service is great for startups, agencies, and businesses looking to capture more opportunities from their website traffic.
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default LeadGeneration;
