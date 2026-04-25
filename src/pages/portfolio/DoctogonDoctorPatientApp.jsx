import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";
import { doctoConGallery } from "./DoctoConGallery";

const DoctogonDoctorPatientApp = () => {
  return (
    <PortfolioPageLayout
      title="DoctoGon Doctor-Patient App"
      subtitle="A mobile-first clinical collaboration platform connecting patients with doctors, appointments, and care workflows."
      description="Designed for convenient teleconsultation, this app streamlines booking, prescription management, and patient follow-up."
      heroImage="/images/DoctoCon/thumbnail/photo.avif"
      gallery={doctoConGallery}
      tags={["Healthcare", "Flutter", "Agora video calling", "Socket.io chatting", "per min coin deduction", "Admin platform fee", "Doctor Friend", "Windral Management", "Patient referral Management", "Login with referral", "Telehealth", "Patient Care", "Doctor Workflow", "Appointment Management", "Prescription Management", "Remote Care", "Secure Messaging", "Appointment Reminders", "Real-Time Notifications", "Treatment Notes", "Doctor-Patient Communication", "Remote Healthcare Solutions", "Medical Appointment Booking"]}
      bgColor="#eef9f3"
    >
      <section className="space-y-10">

        <div className="space-y-6">

        
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Doctor–Patient Communication Platform
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A <span className="font-medium">full-stack healthcare communication system</span> designed to connect
              patients and doctors in real-time. This platform provides a seamless experience for online consultation
              using <strong>chat, voice, and video communication</strong>, along with secure payments and advanced features
              to enhance digital healthcare services.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Frontend:</strong> Flutter (Patient App & Doctor App)</li>
              <li><strong>Backend:</strong> Node.js with Socket.io</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>Real-time Communication:</strong> Agora (Voice & Video Calling)</li>
              <li><strong>Authentication:</strong> Firebase, MSG91 OTP, Gmail SMTP API</li>
              <li><strong>Payments:</strong> Razorpay Payment Gateway</li>
              <li><strong>Storage:</strong> Cloudinary</li>
              <li><strong>Other Integrations:</strong> Google Maps API, Push Notifications</li>
            </ul>
          </div>

     
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Multi-Platform System:</strong> Includes Patient App, Doctor App, and Web Admin Panel.
              </li>
              <li>
                <strong>Real-Time Communication:</strong> Supports chat, voice calls, and video calls with per-minute billing.
              </li>
              <li>
                <strong>Doctor Availability Control:</strong> Doctors can toggle online/offline mode to manage visibility.
              </li>
              <li>
                <strong>Smart Booking System:</strong> Patients can send appointment requests that doctors can accept.
              </li>
              <li>
                <strong>Chat Request Flow:</strong> Communication starts only after doctor approval.
              </li>
              <li>
                <strong>Prescription Management:</strong> Doctors can write and share prescriptions digitally.
              </li>
              <li>
                <strong>Nearby Doctor Search:</strong> Integrated Google Maps API with filtering options.
              </li>
              <li>
                <strong>Secure Login System:</strong> OTP verification and email authentication.
              </li>
            </ul>
          </div>

   
          <div>
            <h2 className="text-xl font-semibold mb-2">Payment & Monetization</h2>
            <p className="text-gray-700 leading-relaxed">
              The platform uses a <strong>coin-based system</strong> where patients purchase
              <span className="font-medium text-blue-600">Doctor Coins</span> via Razorpay.
              These coins are deducted <strong>per minute</strong> during consultations based on the doctor's pricing.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Secure payment gateway integration with GST invoice generation</li>
              <li>Transparent pricing set by individual doctors</li>
              <li>Multiple communication modes with different coin rates</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Advanced & Social Features</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Doctor Referral System:</strong> Doctors can refer patients to other specialists.
              </li>
              <li>
                <strong>Doctor Networking:</strong> Friend request system between doctors.
              </li>
              <li>
                <strong>Ratings & Reviews:</strong> Patients can review doctors after each consultation.
              </li>
              <li>
                <strong>Feedback System:</strong> Feedback collected after every call session.
              </li>
              <li>
                <strong>Reward System:</strong> Patients can send <span className="text-red-500">hearts</span>
                to doctors, each with a predefined coin value.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Project Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              This platform delivers a <strong>scalable and secure digital healthcare solution</strong>,
              enabling instant access to medical professionals. By combining real-time communication,
              smart booking, and digital payments, it significantly improves the efficiency and
              accessibility of healthcare services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">FAQs</h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Q1: What platforms are included in this project?</strong><br />
                A: The system includes a Patient Mobile App, Doctor Mobile App, and a Web Admin Panel.
              </p>

              <p>
                <strong>Q2: How does real-time communication work?</strong><br />
                A: It uses Socket.io for chat and Agora for high-quality voice and video calls.
              </p>

              <p>
                <strong>Q3: How are payments handled?</strong><br />
                A: Payments are processed via Razorpay using a coin-based system with per-minute deduction.
              </p>

              <p>
                <strong>Q4: Can doctors manage their availability?</strong><br />
                A: Yes, doctors can toggle online/offline status anytime from their app.
              </p>

              <p>
                <strong>Q5: Is there a referral feature?</strong><br />
                A: Yes, doctors can refer patients to other doctors within the platform.
              </p>
            </div>
          </div>

        </div>


      </section>
    </PortfolioPageLayout>
  );
};

export default DoctogonDoctorPatientApp;
