import React from "react";
import ServicePageLayout from "./ServicePageLayout";

const InteractionDesign = () => {
  return (
    <ServicePageLayout
      title="Interaction Design"
      subtitle="Delightful digital interactions that feel intuitive and easy to use."
      description="I focus on the details that make each click, scroll, and swipe feel natural while preserving brand clarity."
      bullets={[
        "User journeys designed for clear conversion paths",
        "Micro-interactions, animations, and feedback states",
        "Adaptive layouts that respond gracefully to screen size",
        "Human-centered design with a polished visual language",
      ]}
      image="/images/logo2.png"
    >
      <div className="rounded-[28px] bg-[#edf8ff] p-8 border border-[#d7e9f7]">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Designing experiences that feel alive</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Interaction design is about motion, timing, and clarity. I build interfaces that communicate instantly and help users complete tasks faster.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This service is ideal for product pages, SaaS dashboards, and apps where users need confidence in every flow.
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default InteractionDesign;
