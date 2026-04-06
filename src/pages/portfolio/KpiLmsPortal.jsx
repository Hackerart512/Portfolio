import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const gallery = [
  "/images/kpi_lms/gallery/kpi_thumbnail3.png",
  "/images/kpi_lms/gallery/kpi_thumbnail2.png",
  "/images/kpi_lms/gallery/1.jpg",
  "/images/kpi_lms/gallery/2.jpg",
  "/images/kpi_lms/gallery/3.jpg",
  "/images/kpi_lms/gallery/4.jpg",
  "/images/kpi_lms/gallery/5.jpg",
  "/images/kpi_lms/gallery/6.jpg",
  "/images/kpi_lms/gallery/7.jpg",
  "/images/kpi_lms/gallery/8.jpg",
];

const KpiLmsPortal = () => {
  return (
    <PortfolioPageLayout
      title="KPI & LMS Performance Portal"
      subtitle="A unified performance and learning management system built for enterprise visibility, employee growth, and data-driven decision making."
      description="This portal combines KPI dashboards, role-based permissions, and LMS training modules into one polished SaaS experience."
      heroImage="/images/kpi_lms/kpi_thumbnail.png"
      tags={["Laravel", "MySQL", "Performance", "LMS"]}
      gallery={gallery}
      bgColor="#e8f7ff"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Performance Management That Scales</h2>
          <p className="text-gray-700 leading-relaxed">
            The KPI & LMS portal helps managers and administrators monitor employee productivity,
            training completion, and business performance from a single dashboard. It includes data
            visualizations for scorecards, attendance, goal progress, and department-level insights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Learning Experience Designed for Growth</h2>
          <p className="text-gray-700 leading-relaxed">
            Course content is organized into modular learning paths with quizzes, certificates, and
            progress tracking. Employees can self-enroll in courses while managers assign targeted
            upskilling programs based on performance reviews.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Secure Role-based Dashboards</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#ebf4ff]">
              <h3 className="font-semibold mb-2">Super Admin</h3>
              <p className="text-gray-600">
                Full system access, user onboarding, KPI configuration, and analytics governance.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#ebf4ff]">
              <h3 className="font-semibold mb-2">Employee & Executive</h3>
              <p className="text-gray-600">
                Personal performance dashboards, course progress, feedback threads, and review reports.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Analytics & Automation</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Real-time KPI charts and progress summaries</li>
            <li>Automated training reminders and assessment notifications</li>
            <li>Custom exportable reports for HR and leadership</li>
            <li>Integration-ready backend with API-first architecture</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default KpiLmsPortal;
