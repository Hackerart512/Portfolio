import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";

const AgnozDoctorApk = () => {
  return (
    <PortfolioPageLayout
      title="Agnoz Doctor APK"
      subtitle="A modern healthcare application for doctor consultations, patient records, and medical service delivery."
      description="Built for mobile patients and providers, the Agnoz app focuses on fast access to care, appointment tracking, and medical reporting."
      heroImage="/images/Agnoz C-R/thumbnail/agnoz_thumbnail.png"
      tags={["Android", "Healthcare", "Appointment"]}
      bgColor="#fff7ed"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Doctor Appointments Simplified</h2>
          <p className="text-gray-700 leading-relaxed">
            Agnoz Doctor APK offers a clean appointment booking experience, patient onboarding,
            and clinic management features to drive faster consultation cycles.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Patient Record Management</h2>
          <p className="text-gray-700 leading-relaxed">
            Patients can store medical documents, view lab results, and share health information
            with their care team through the secure app interface.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Trusted Care for the Mobile User</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Easy doctor discovery and appointment scheduling</li>
            <li>Automated reminders and consultation follow-ups</li>
            <li>Clinical notes and prescription access on demand</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default AgnozDoctorApk;
