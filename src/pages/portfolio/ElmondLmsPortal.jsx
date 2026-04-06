import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const ElmondLmsPortal = () => {
  return (
    <PortfolioPageLayout
      title="Elmond LMS Portal"
      subtitle="A modern learning management portal built for educators, students, and training administrators."
      description="Elmond LMS delivers course creation, progress analytics, and collaborative learning tools through a clean dashboard experience."
      heroImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
      tags={["LMS", "Education", "Learning"]}
      bgColor="#f2fbff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Course Management and Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Educators can create courses, manage modules, and publish learning materials quickly
            while students access lessons, assignments, and progress dashboards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Student Progress and Feedback</h2>
          <p className="text-gray-700 leading-relaxed">
            The portal includes gradebooks, completion tracking, and automatic feedback options to
            keep learners engaged and instructors informed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Learning Experience and Collaboration</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Interactive lesson pages and resource libraries</li>
            <li>Discussion forums and group activity support</li>
            <li>Admin reporting for student performance and course completion</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default ElmondLmsPortal;
