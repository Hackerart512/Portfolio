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

        <div>
          <h2 className="text-2xl font-semibold mb-3">Driver & Order Management</h2>
          <p className="text-gray-700 leading-relaxed">
            Built to scale, the backend includes driver availability control, trip history logging,
            fare calculation, and live status tracking for every assignment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Secure Integrations</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>REST and webhook endpoints for mobile clients</li>
            <li>Payment gateway support and transaction logging</li>
            <li>Admin dashboard reports and audit-ready event streams</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default SwiftGoBackend;
