import { Navigate, useRoutes, Route } from "react-router-dom";
import Land from "./pages/Land";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Land />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/our-services",
      element: <Services />,
    },
    {
      path: "/our-gallery",
      element: <Gallery />,
    },
    {
      path: "/our-blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return routes;
}
