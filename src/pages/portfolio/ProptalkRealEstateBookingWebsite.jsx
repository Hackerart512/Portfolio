import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const ProptalkRealEstateBookingWebsite = () => {

  const galleries = [];

  return (
    <PortfolioPageLayout
      title="Proptalk Real Estate Booking Website"
      subtitle="A modern real estate website designed for property discovery, listing management, and client engagement."
      description="Proptalk provides a seamless platform for buyers and sellers to explore properties, schedule viewings, and complete transactions."
      heroImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      tags={["Laravel Module Structure", "Real Estate", "Property Buy", "Property Buy"]}
      bgColor="#fff8eb"
      gallery={galleries}
      link="https://proptalk.in/"
    >

      <section className="project-details space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Real Estate Platform & Property Management
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Worked on extending the existing PropTalk real estate
            platform by developing advanced property management,
            dynamic search filters, agency management, and
            subscription-based functionality. Implemented a
            comprehensive system that enables agencies to manage
            their employees, property listings, and customer leads
            through a centralized dashboard.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Advanced Property Search & Dynamic Filters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed dynamic property filtering functionality
            based on multiple search conditions, allowing users
            to find relevant properties through customized filters.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Residential and commercial property filters.</li>
            <li>Buy, Sell property categories.</li>
            <li>City, locality, and building-based search.</li>
            <li>Property type, BHK, bathrooms, and balconies filters.</li>
            <li>Furnishing, carpet area, and built-up area filters.</li>
            <li>Price, availability, parking, and amenities filters.</li>
            <li>Conditional filters based on selected property types.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Dynamic Property Listing Management
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Implemented a complete property listing management
            module supporting Buy/Sell and Rent workflows.
            Developed functionality to manage property details,
            pricing, images, location, availability, and listing
            visibility across the platform.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Dynamic property creation and editing.</li>
            <li>Separate Buy/Sell and Rent listing management.</li>
            <li>Property images and detailed information.</li>
            <li>Property status and availability management.</li>
            <li>Private agency notes and internal property details.</li>
            <li>Property publishing and visibility controls.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Agency Management Dashboard
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed a dedicated agency panel within the existing
            system, allowing agencies to manage their profiles,
            employees, property listings, and assigned leads from
            a centralized dashboard.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Agency dashboard and profile management.</li>
            <li>Employee creation and management.</li>
            <li>Centralized property listing management.</li>
            <li>Subscription and plan usage information.</li>
            <li>Employee-based lead assignment.</li>
            <li>Agency-level activity and listing management.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Dynamic Subscription & Agency Plan Management
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Implemented a flexible subscription management module
            where administrators can create and configure agency
            plans dynamically. Each plan includes configurable
            employee and property listing limits, allowing agencies
            to purchase plans according to their business needs.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Dynamic plan creation from the admin panel.</li>
            <li>Configurable employee limits per subscription.</li>
            <li>Property listing limits based on purchased plans.</li>
            <li>Plan-based employee and listing restrictions.</li>
            <li>Subscription details and usage tracking.</li>
            <li>Dynamic plan management and administration.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Employee & Lead Assignment Management
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed employee management and lead distribution
            functionality, enabling agencies to assign customer
            enquiries to their employees and manage lead activities
            through the agency dashboard.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Employee account creation and management.</li>
            <li>Lead assignment to individual employees.</li>
            <li>Employee-specific lead access.</li>
            <li>Lead tracking and management.</li>
            <li>Role-based access for admin, agency, and employees.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Admin Panel & Existing System Integration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Extended the existing Laravel application by
            integrating new agency, subscription, employee,
            property, and lead management modules. Implemented
            centralized administration and dynamic configurations
            to maintain a scalable and manageable platform.
          </p>
        </div>

      </section>

    </PortfolioPageLayout>
  );
};

export default ProptalkRealEstateBookingWebsite;
