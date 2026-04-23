import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";
import { babylandGallery } from "./BabylandGallery";

const BabyLandApk = () => {
  return (
    <PortfolioPageLayout
      title="Baby Land APK"
      subtitle="AI-Based Pregnancy & Baby Growth Tracking Platform"
      description="A comprehensive health-tech platform designed forpre-pregnancy, pregnancy, post-pregnancy, and baby growth tracking. This system uses AI-powered predictions to provide personalized insights related to health, nutrition, exercise, and baby development. The platform offers an interactive dashboard with visual analytics and intelligent recommendations."
      heroImage="/images/Babyland-AI Health app/thumbnail/photo.png"
      tags={["Mobile App","Flutter", "Node.js", "MongoDB", "Firebase", "Twilio", "SendGrid", "Razorpay", "Video Calling", "React.js", "Admin Panel", "Subscription Model", "Predictive Analytics", "Community Support", "User Engagement", "Data Visualization", "Personalized Recommendations", "Pregnancy Tracker", "Baby Growth Tracker", "Menstrual Cycle Tracker", "Pre-Pregnancy Tracker", "Post-Pregnancy Tracker", "Doctor Consultation", "Health Insights", "Milestone Tracking", "Vaccination Reminders", "Task Scheduling", "Appointment Alerts", "AI Chatbot",  "AI-Powered Predictions", "Visual Analytics", "Intelligent Recommendations", "Health Monitoring","Subscription Model", "Doctor Consultation", "Community Support"]}
      bgColor="#fff0f6"
        gallery={babylandGallery}
    >
      <section className="space-y-10">


        {/* <div>
          <h2 className="text-2xl font-semibold mb-3">
            AI-Based Pregnancy & Baby Growth Tracking Platform
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A <span className="font-medium">comprehensive health-tech platform</span> designed for
            <strong>pre-pregnancy, pregnancy, post-pregnancy, and baby growth tracking</strong>.
            This system uses <span className="text-blue-600">AI-powered predictions</span> to provide
            personalized insights related to health, nutrition, exercise, and baby development.
            The platform offers an interactive dashboard with visual analytics and intelligent recommendations.
          </p>
        </div> */}

        <div>
          <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li><strong>Frontend:</strong> Flutter (User App), React.js (Admin Panel)</li>
            <li><strong>Backend:</strong> Node.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>AI Integration:</strong> Personalized chatbot & predictive analytics</li>
            <li><strong>Authentication:</strong> Firebase, Twilio (Phone OTP), SendGrid (Email Verification)</li>
            <li><strong>Payments:</strong> Razorpay Subscription Integration</li>
            <li><strong>Doctor Consultation:</strong> Video calling feature for expert advice</li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>AI-Powered Dashboard:</strong> Displays predictive health data, baby growth insights,
              and personalized suggestions for diet, yoga, and lifestyle.
            </li>
            <li>
              <strong>AI Chatbot:</strong> Users can interact with an intelligent chatbot to get
              <span className="font-medium">current and future health predictions</span>.
            </li>
            <li>
              <strong>Secure Authentication:</strong> Phone OTP login via Twilio and email verification using SendGrid.
            </li>
            <li>
              <strong>Subscription Model:</strong> Users can purchase plans to unlock premium features with controlled access.
            </li>
            <li>
              <strong>Doctor Consultation:</strong> Integrated video call feature to connect with doctors for guidance.
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Tracking Modules</h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-3">

            <li>
              <strong>Menstrual Cycle Tracker:</strong>
              <p className="mt-1">
                Users can log cycle start dates, and the system predicts a
                <span className="text-blue-600">full-year cycle calendar</span>.
                With continuous data input, predictions become more accurate.
              </p>
              <p className="mt-1">
                Daily logs include mood, sleep, water intake, and stress levels.
                Based on this data, AI provides suggestions on
                <strong>diet, hydration, and exercise routines</strong>.
              </p>
            </li>

            <li>
              <strong>Pre-Pregnancy Tracker:</strong>
              <p className="mt-1">
                Helps users prepare for pregnancy with health insights,
                recommendations, and predictive guidance for better planning.
              </p>
            </li>

            <li>
              <strong>Pregnancy Tracker:</strong>
              <p className="mt-1">
                Users enter pregnancy start date to receive
                <span className="font-medium">appointment reminders, health tips, and milestone tracking</span>.
              </p>
            </li>

            <li>
              <strong>Post-Pregnancy Tracker:</strong>
              <p className="mt-1">
                Provides recovery tracking, health monitoring, and lifestyle suggestions
                for mothers after childbirth.
              </p>
            </li>

            <li>
              <strong>Baby Growth Tracker:</strong>
              <p className="mt-1">
                Tracks baby development with visual representation such as
                <span className="text-green-600">“Your baby is the size of an avocado”</span>.
              </p>
              <ul className="list-disc pl-5 mt-1">
                <li>Vaccination (Tika) reminders</li>
                <li>Task scheduling and appointment alerts</li>
                <li>Monthly height and growth tracking with visual graphs</li>
                <li>Milestone tracking with baby photo uploads</li>
              </ul>
            </li>

          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Community & Social Features</h2>
          <p className="text-gray-700 leading-relaxed">
            The platform includes a <strong>global community support system</strong> where users can
            share experiences, post updates, and interact with others similar to
            <span className="font-medium">social media platforms</span>. Users can like, comment, and share posts.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
          <p className="text-gray-700 leading-relaxed">
            A dedicated <strong>admin dashboard</strong> built with React.js and Node.js allows
            administrators to monitor user activity, manage data, and control platform operations efficiently.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Project Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            This platform delivers a <strong>data-driven and AI-powered healthcare experience</strong>
            for mothers and families. By combining predictive analytics, real-time tracking,
            and expert consultation, it empowers users to make informed decisions throughout
            their pregnancy and parenting journey.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">FAQs</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Q1: What is the main purpose of this platform?</strong><br />
              A: It helps users track pregnancy stages and baby growth with AI-based predictions and health insights.
            </p>

            <p>
              <strong>Q2: How does the AI system work?</strong><br />
              A: It analyzes user inputs like health logs, cycle data, and activity to provide personalized predictions and suggestions.
            </p>

            <p>
              <strong>Q3: Is there a subscription model?</strong><br />
              A: Yes, users can subscribe to access premium features and advanced tracking tools.
            </p>

            <p>
              <strong>Q4: Can users consult doctors?</strong><br />
              A: Yes, the platform supports video consultations with doctors.
            </p>

            <p>
              <strong>Q5: What makes this platform unique?</strong><br />
              A: Its combination of AI predictions, multiple health trackers, and community support in a single ecosystem.
            </p>
          </div>
        </div>



      </section>
    </PortfolioPageLayout>
  );
};

export default BabyLandApk;
