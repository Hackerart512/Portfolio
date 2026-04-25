import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";
import { elmondGallery } from "./ElmondGallery";

const ElmondLmsPortal = () => {
  return (
    <PortfolioPageLayout
      title="Elmond LMS Portal"
      subtitle="A modern learning management portal built for educators, students, and training administrators."
      description="Elmond LMS delivers course creation, progress analytics, and collaborative learning tools through a clean dashboard experience."
      heroImage="/images/Elmond/thumbnail/elmond.avif"
      tags={["LMS", "Laravel", "MySql", "Vimeo Player","Razorpay"]}
      bgColor="#f2fbff"
      gallery={elmondGallery}
      link="https://elmond.org/"
    >

      <div className="space-y-10">


        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Learning Management System (LMS) Platform
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A <span className="font-medium">feature-rich e-learning platform</span> built to deliver
            secure and scalable online education experiences. The system allows users to
            <strong>purchase, access, and manage courses</strong> while providing admins with
            powerful tools for content management, analytics, and user control.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li><strong>Backend:</strong> Laravel (PHP Framework)</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Video Security:</strong> Vimeo Player Integration</li>
            <li><strong>Email Services:</strong> SMTP Email Integration</li>
            <li><strong>Payments:</strong> Razorpay Payment Gateway</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">

            <li>
              <strong>Course Management:</strong> Admin can upload and manage courses dynamically from the dashboard.
            </li>

            <li>
              <strong>Flexible Purchase System:</strong> Users can buy
              <span className="text-blue-600">single courses or multiple courses</span> using a secure checkout process.
            </li>

            <li>
              <strong>Gift Course Feature:</strong> Users can purchase and send courses to other users.
            </li>

            <li>
              <strong>Subscription & Bundle System:</strong>
              Admin can create <strong>custom subscription plans</strong> (monthly/yearly) and
              <span className="font-medium">bundle multiple courses</span> with flexible access control.
            </li>

            <li>
              <strong>Secure Video Streaming:</strong> Course videos are protected using Vimeo player integration.
            </li>

            <li>
              <strong>Review Approval System:</strong> User reviews are moderated by admin before publishing.
            </li>

          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">User Panel Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">

            <li><strong>Dashboard:</strong> Overview of enrolled courses and activities</li>
            <li><strong>My Courses:</strong> Access purchased and enrolled courses</li>
            <li><strong>Payments:</strong> Track transaction history</li>
            <li><strong>Certificates:</strong> Download certificates after course completion</li>
            <li><strong>Quiz Section:</strong> Attempt quizzes and retake options available</li>
            <li><strong>Profile Management:</strong> Update personal information</li>

            <li>
              <strong>Course Query System:</strong> Users can raise tickets or queries related to specific courses,
              and receive responses from <span className="font-medium">instructors and admin</span>.
            </li>

          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Panel Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">

            <li>
              <strong>Dynamic Homepage Builder:</strong> Drag-and-drop sections like
              <span className="text-purple-600">Upcoming Courses, New Courses, Coming Soon</span>.
            </li>

            <li>
              <strong>Manual Enrollment:</strong> Admin can enroll users in courses without payment.
            </li>

            <li>
              <strong>Reports & Analytics:</strong> Export reports for
              <strong>students, enrollments, and pending enrollments</strong>.
            </li>

            <li>
              <strong>One-Click User Login:</strong> Admin can access any user account to debug issues.
            </li>

            <li>
              <strong>Login Activity Tracking:</strong> Monitor login history of all users.
            </li>

            <li>
              <strong>Blog Management:</strong> Create and publish blogs directly from admin dashboard.
            </li>

          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Security Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">

            <li>
              <strong>Single Device Login:</strong> One account can only be used on one device at a time.
            </li>

            <li>
              <strong>Session-Based Authentication:</strong> Unique session ID validation ensures secure login handling.
            </li>

            <li>
              <strong>Auto Logout System:</strong> If another login occurs, the previous session is automatically terminated.
            </li>

            <li>
              <strong>Secure Payment Processing:</strong> Integrated Razorpay ensures safe transactions.
            </li>

          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">User Roles</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li><strong>Admin</strong> – Full system control</li>
            <li><strong>Instructor</strong> – Manage courses and respond to queries</li>
            <li><strong>Organizer</strong> – Handle course coordination</li>
            <li><strong>User</strong> – Access and learn courses</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Project Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            This LMS platform delivers a <strong>secure, scalable, and user-friendly e-learning solution</strong>
            with advanced features like subscription management, course gifting, real-time query support,
            and strong security mechanisms—making it ideal for modern online education platforms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">FAQs</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Q1: Can users buy multiple courses at once?</strong><br />
              A: Yes, users can purchase single or multiple courses through the checkout system.
            </p>

            <p>
              <strong>Q2: Is there a subscription model?</strong><br />
              A: Yes, admins can create flexible subscription plans and course bundles.
            </p>

            <p>
              <strong>Q3: How are course videos secured?</strong><br />
              A: Videos are protected using Vimeo player integration.
            </p>

            <p>
              <strong>Q4: Can users interact with instructors?</strong><br />
              A: Yes, users can raise queries and communicate with instructors and admin.
            </p>

            <p>
              <strong>Q5: What security features are implemented?</strong><br />
              A: Session-based login, single-device access, and auto logout for enhanced security.
            </p>
          </div>
        </div>

      </div>

    </PortfolioPageLayout>
  );
};

export default ElmondLmsPortal;
