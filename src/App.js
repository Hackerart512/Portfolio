
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fortawesome/fontawesome-free/css/all.min.css';


// Components
import SmoothScroll from "./components/common/SmoothScroll";
import Cursor from "./components/common/Cursor";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import BlogShow from "./pages/BlogShow";
import Services from "./pages/Services";
import WebDevelopment from "./pages/services/WebDevelopment";
import WebsiteSeo from "./pages/services/WebsiteSeo";
import InteractionDesign from "./pages/services/InteractionDesign";
import LeadGeneration from "./pages/services/LeadGeneration";
import Portfolio from "./pages/Portfolio";
import MonisaERP from "./pages/portfolio/MonisaErpPortal";
import KpiLmsPortal from "./pages/portfolio/KpiLmsPortal";
import DoctogonDoctorPatientApp from "./pages/portfolio/DoctogonDoctorPatientApp";
import AgnozDoctorApk from "./pages/portfolio/AgnozDoctorApk";
import BabyLandApk from "./pages/portfolio/BabyLandApk";
import SwiftGoBackend from "./pages/portfolio/SwiftGoBackend";
import ProptalkHotelBookingWebsite from "./pages/portfolio/ProptalkHotelBookingWebsite";
import InstadhamYatraApk from "./pages/portfolio/InstadhamYatraApk";
import WordpressMonisa from "./pages/portfolio/WordpressMonisa";
import NarutoCrm from "./pages/portfolio/NarutoCrm";
import VideoEditReel from "./pages/portfolio/VideoEditReel";
import ElmondLmsPortal from "./pages/portfolio/ElmondLmsPortal";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // Define your routes
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/services/web-development", element: <WebDevelopment /> },
    { path: "/services/website-seo", element: <WebsiteSeo /> },
    { path: "/services/interaction-design", element: <InteractionDesign /> },
    { path: "/services/lead-generation", element: <LeadGeneration /> },
    { path: "/demo", element: <Demo /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <BlogShow /> },
    { path: "/work/:id", element: <Portfolio /> },
    { path: "/portfolio/monisa-freelancing-portal", element: <MonisaERP /> },
    { path: "/portfolio/kpi-lms-portal", element: <KpiLmsPortal /> },
    { path: "/portfolio/doctogon-doctor-patient-app", element: <DoctogonDoctorPatientApp /> },
    { path: "/portfolio/agnoz-doctor-apk", element: <AgnozDoctorApk /> },
    { path: "/portfolio/baby-land-apk", element: <BabyLandApk /> },
    { path: "/portfolio/swiftgo-backend", element: <SwiftGoBackend /> },
    { path: "/portfolio/proptalk-hotel-booking-website", element: <ProptalkHotelBookingWebsite /> },
    { path: "/portfolio/instadham-yatra-apk", element: <InstadhamYatraApk /> },
    { path: "/portfolio/wordpress-monisa", element: <WordpressMonisa /> },
    { path: "/portfolio/naruto-crm", element: <NarutoCrm /> },
    { path: "/portfolio/video-edit-reel", element: <VideoEditReel /> },
    { path: "/portfolio/elmond-lms-portal", element: <ElmondLmsPortal /> },
  ];

  // Create router with future flags
  const router = createBrowserRouter(routes, {
    future: {
      v7_startTransition: true,    // Opt-in for startTransition behavior
      v7_relativeSplatPath: true   // Opt-in for relative splat path resolution
    }
  });

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Smooth scroll wrapper */}
      <SmoothScroll smooth={0.08}>
        {/* RouterProvider handles routing */}
        <RouterProvider router={router} />
      </SmoothScroll>
    </>
  );
}

export default App;

