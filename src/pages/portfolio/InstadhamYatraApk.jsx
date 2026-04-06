import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const InstadhamYatraApk = () => {
  return (
    <PortfolioPageLayout
      title="Instadham Yatra APK"
      subtitle="A travel planning and booking app built for holidaymakers who want curated journeys and seamless experiences."
      description="Instadham Yatra helps users create itineraries, discover destinations, and book travel services from a single mobile app."
      heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      tags={["Travel", "Mobile", "Booking"]}
      bgColor="#eef6ff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Trip Planning Made Simple</h2>
          <p className="text-gray-700 leading-relaxed">
            Instadham Yatra gives users intuitive itinerary creation tools, destination guides,
            and travel recommendations tailored to every type of journey.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Bookings and Experiences</h2>
          <p className="text-gray-700 leading-relaxed">
            The app supports hotel reservations, tour packages, and local experiences through a clean
            booking engine with clear pricing and availability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Personalized Travel Support</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Saved trips and smart reminders</li>
            <li>Offline destination notes and maps</li>
            <li>Custom itinerary sharing and travel inspiration feeds</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default InstadhamYatraApk;
