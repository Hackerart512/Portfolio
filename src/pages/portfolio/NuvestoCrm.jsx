import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const NuvestoCrm = () => {
  // const galleries = ['/images/nuvesto/1.png', '/images/nuvesto/2.png', '/images/nuvesto/3.png', '/images/nuvesto/4.png', '/images/nuvesto/5.png', '/images/nuvesto/6.png', '/images/nuvesto/7.png', '/images/nuvesto/8.png', '/images/nuvesto/9.png', '/images/nuvesto/10.png', '/images/nuvesto/11.png', '/images/nuvesto/12.png', '/images/nuvesto/12.png', '/images/nuvesto/13.png', '/images/nuvesto/14.png'];

  const galleries = [];

  return (
    <PortfolioPageLayout
      title="Nuvesto CRM"
      subtitle="A compact customer relationship management platform for sales teams to manage leads, pipelines, and client communication."
      description="Designed for teams who need fast lead capture, visual pipeline tracking, and easy contact management."
      heroImage="/images/nuvesto/thumbnail/photo.png"
      tags={["CRM", "Sales", "Dashboard"]}
      gallery={galleries}
      bgColor="#f0f5ff"
      link="https://intl.nuvesto.com/"
    >

      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Complete CRM Panel UI/UX Redesign
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Worked on the Nuvesto CRM system, redesigning the complete
            CRM panel layout with a modern, clean, and user-friendly
            interface. Focused on improving the overall user experience,
            visual consistency, and application usability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            CSS Customization & Layout Improvements
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customized and modified CSS across the CRM panel to improve
            layouts, spacing, typography, colors, responsive behavior,
            and visual consistency across different modules.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            CRM Module UI Enhancements
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Improved dashboard and navigation layouts.</li>
            <li>Enhanced lead management and sales pipeline interfaces.</li>
            <li>Redesigned task and contact management screens.</li>
            <li>Improved forms, tables, buttons, cards, and UI components.</li>
            <li>Maintained responsive design and consistent styling.</li>
          </ul>
        </div>
      </section>

    </PortfolioPageLayout>
  );
};

export default NuvestoCrm;
