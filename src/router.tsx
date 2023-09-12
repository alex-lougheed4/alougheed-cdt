import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DenturePage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ClinicsPage from "./pages/ClinicsPage";
import NewDenturesPage from "./pages/NewDenturesPage";
import RepairsPage from "./pages/RepairsPage";
import ClinicalDentalTechnician from "./pages/ClinicalDentalTechnician";

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
  {
    path: "/clinics",
    element: <ClinicsPage />,
  },
  {
    path: "/repairs",
    element: <RepairsPage />,
  },
  {
    path: "/new-dentures",
    element: <NewDenturesPage />,
  },
  {
    path: "/clinical-dental-technician",
    element: <ClinicalDentalTechnician />,
  },
]);
