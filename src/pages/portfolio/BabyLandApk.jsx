import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const BabyLandApk = () => {
  return (
    <PortfolioPageLayout
      title="Baby Land APK"
      subtitle="A parenting lifestyle app for baby care, product discovery, and curated shopping experiences."
      description="Baby Land is designed for new parents who want simple access to baby essentials, expert advice, and gentle product recommendations."
      heroImage="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
      tags={["Mobile App", "Ecommerce", "Parenting"]}
      bgColor="#fff0f6"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Curated Baby Products</h2>
          <p className="text-gray-700 leading-relaxed">
            The app features a catalog of trusted baby products, easy filtering for age groups,
            and saved shopping lists to help parents complete purchases quickly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Parenting Guidance and Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Baby Land includes tips for feeding, sleep routines, and milestones, along with
            recommendations for pediatric care and baby-friendly services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Smart Shopping Experience</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Fast checkout and wishlist management</li>
            <li>Age-based product bundles and subscription boxes</li>
            <li>Parent dashboard with activity tracking and order history</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default BabyLandApk;
