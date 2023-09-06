import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DenturePage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <DenturePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
