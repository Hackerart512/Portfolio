import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";
import { doctoConGallery } from "./DoctoConGallery";

const DoctogonDoctorPatientApp = () => {
  return (
    <PortfolioPageLayout
      title="DoctoGon Doctor-Patient App"
      subtitle="A mobile-first clinical collaboration platform connecting patients with doctors, appointments, and care workflows."
      description="Designed for convenient teleconsultation, this app streamlines booking, prescription management, and patient follow-up."
      heroImage="/images/Doctocon/thumbnail/doctocon_thumbnail.png"
      gallery={doctoConGallery}
      tags={["Healthcare", "React Native", "Telehealth"]}
      bgColor="#eef9f3"
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Patient-centric Telemedicine</h2>
          <p className="text-gray-700 leading-relaxed">
            Patients can search doctors by specialty, book appointments, and access consultation history.
            The application supports secure messaging, digital prescriptions, and appointment reminders.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Doctor Workflows Built for Efficiency</h2>
          <p className="text-gray-700 leading-relaxed">
            Doctors receive real-time patient requests, manage schedules, review medical history,
            and update treatment notes from a clean clinical dashboard.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Support for Remote Care</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Appointment booking with calendar sync</li>
            <li>HIPAA-inspired privacy and secure patient data handling</li>
            <li>Prescription issuance and follow-up task management</li>
          </ul>
        </div>
      </section>
    </PortfolioPageLayout>
  );
};

export default DoctogonDoctorPatientApp;
