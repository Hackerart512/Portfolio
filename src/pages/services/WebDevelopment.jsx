import React from "react";
import ServicePageLayout from "./ServicePageLayout";

const WebDevelopment = () => {
  return (
    <ServicePageLayout
      title="Web Development"
      subtitle="Responsive websites, custom UI, and scalable web applications built for growth."
      description="From landing pages to full-stack applications, I deliver polished web solutions that work beautifully on every device."
      bullets={[
        "React-powered interfaces with performance-first architecture",
        "Backend integration using Node.js, Express, and API connectivity",
        "Mobile-first layouts and pixel-perfect design implementation",
        "Fast delivery, maintainable code, and easy content updates",
      ]}
      image="/images/logo_light.png"
    >
      <div className="rounded-[28px] bg-[#fffaf2] p-8 border border-[#f7debf]">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">How I build modern web products</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          I start with a strong design system, translate it into reusable React components, and connect front-end flows to the backend services your business needs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The result is a site that looks great, loads fast, and scales with the next stage of your business.
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default WebDevelopment;
