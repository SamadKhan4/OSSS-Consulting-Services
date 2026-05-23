import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services/Services";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import Brouchure from "./pages/Brouchure";
import WriteForUs from "./pages/WriteForUs";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Service Pages
import WebDev from "./pages/Services/Webdev";
import AppDev from "./pages/Services/Appdev";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import TechnicalSupport from "./pages/Services/TechnicalSupport";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/brochure" element={<Brouchure />} />
        <Route
          path="/broucher"
          element={<Navigate to="/brochure" replace />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/writeforus" element={<WriteForUs />} />
        <Route
          path="/write-for-us"
          element={<Navigate to="/writeforus" replace />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />

        {/* Service Pages */}
        <Route path="/services/webdev" element={<WebDev />} />
        <Route path="/services/appdev" element={<AppDev />} />
        <Route
          path="/services/digitalmarketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/technicalsupport"
          element={<TechnicalSupport />}
        />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;