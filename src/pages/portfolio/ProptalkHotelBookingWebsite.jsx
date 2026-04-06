import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const ProptalkHotelBookingWebsite = () => {
  return (
    <PortfolioPageLayout
      title="Proptalk Hotel Booking Website"
      subtitle="A modern hospitality website designed for property discovery, room booking, and guest engagement."
      description="Proptalk offers travelers a visual booking experience with streamlined search, secure checkout, and property storytelling."
      heroImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      tags={["Web", "Booking", "Hospitality"]}
      bgColor="#fff8eb"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Destination-first Booking</h2>
          <p className="text-gray-700 leading-relaxed">
            The website highlights curated properties with immersive imagery, room details,
            and filtering by amenities, price, and location.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Secure Reservation Flow</h2>
          <p className="text-gray-700 leading-relaxed">
            Users can compare room types, select dates, and complete bookings using a secure
            checkout path with payment confirmation and booking receipts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Guest Experience Enhancements</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Room previews and customer reviews</li>
            <li>Special offers, package highlights, and loyalty messaging</li>
            <li>Responsive layout optimized for desktop and mobile travelers</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default ProptalkHotelBookingWebsite;
