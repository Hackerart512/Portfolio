
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";

// Components
import SmoothScroll from "./componenets/SmoothScroll";
import Cursor from "./componenets/Cursor";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import BlogShow from "./pages/BlogShow";
import Portfolio from "./pages/Portfolio";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // Define your routes
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    { path: "/demo", element: <Demo /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <BlogShow /> },
    { path: "/work/:id", element: <Portfolio /> },
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
