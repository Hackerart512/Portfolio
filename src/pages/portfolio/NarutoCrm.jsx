import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const NarutoCrm = () => {
  return (
    <PortfolioPageLayout
      title="Naruto CRM"
      subtitle="A compact customer relationship management platform for sales teams to manage leads, pipelines, and client communication."
      description="Designed for teams who need fast lead capture, visual pipeline tracking, and easy contact management."
      heroImage="https://images.unsplash.com/photo-1517244806767-6c2f5c9d0f02"
      tags={["CRM", "Sales", "Dashboard"]}
      bgColor="#f0f5ff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Lead Management with Clarity</h2>
          <p className="text-gray-700 leading-relaxed">
            Naruto CRM helps teams capture leads, categorize prospects, and track status across
            customized sales stages.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Pipeline Visibility</h2>
          <p className="text-gray-700 leading-relaxed">
            The pipeline view makes it easy to spot opportunities, forecast revenue, and prioritize
            follow-ups.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Task and Contact Automation</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Automated reminders for calls and meetings</li>
            <li>Rich contact records with notes and activity history</li>
            <li>Lead scoring for higher conversion focus</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default NarutoCrm;
