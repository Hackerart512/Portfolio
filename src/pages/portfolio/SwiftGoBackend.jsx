import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const SwiftGoBackend = () => {
  return (
    <PortfolioPageLayout
      title="SwiftGo Backend"
      subtitle="A high-performance backend platform for on-demand delivery and transport services."
      description="This backend solution powers driver tracking, order orchestration, and real-time communication for mobility apps."
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      tags={["Node.js", "APIs", "Logistics"]}
      bgColor="#eff8ff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Reliable Dispatch Architecture</h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftGo provides a robust server-side architecture for dispatching orders, assigning drivers,
            and handling route updates with minimal latency.
          </p>
        </div>

        <ul>
          <li>swftgo project include, react admin panel, nodejs type script MVC backend, postgress database, </li>
        </ul>
      </section>
    </PortfolioPageLayout>
  );
};

export default SwiftGoBackend;
