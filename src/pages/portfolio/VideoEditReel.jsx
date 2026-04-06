import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const VideoEditReel = () => {
  return (
    <PortfolioPageLayout
      title="Video Edit Reel"
      subtitle="A creative video editing platform built for fast reel production and social-ready content delivery."
      description="This product showcases a user-friendly editor with transitions, filters, and export-ready presets designed for short-form media."
      heroImage="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      tags={["Video", "Editing", "Creative"]}
      bgColor="#fff3f8"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Fast Social Video Creation</h2>
          <p className="text-gray-700 leading-relaxed">
            Video Edit Reel focuses on fast editing workflows, allowing creators to build polished reels
            with minimal effort and export them in mobile-ready formats.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Creative Tools and Effects</h2>
          <p className="text-gray-700 leading-relaxed">
            The platform supports trimming, transitions, audio mixing, and motion effects that bring
            short-form videos to life.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Designed for Speed</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Quick storyboard creation and preview</li>
            <li>One-tap export for Instagram, TikTok, and YouTube</li>
            <li>Simple UX for beginners and pros alike</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default VideoEditReel;
