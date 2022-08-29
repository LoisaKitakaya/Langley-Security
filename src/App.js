import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Article from "./pages/Article";
import Contacts from "./pages/Contacts";
import Industries from "./pages/Industries";
import ResourceCenter from "./pages/ResourceCenter";
import Industry from "./pages/Industry";
import WhyUs from "./pages/WhyUs";
import WhoWeAre from "./pages/WhoWeAre";
import Locations from "./pages/Locations";
import Careers from "./pages/Careers";
import SecurityServices from "./pages/SecurityServices";
import TechnologyServices from "./pages/TechnologyServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms&Conditions";

const App = () => {
  return (
    <div className="App">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* site routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource-center" element={<ResourceCenter />} />
        <Route path="/feed/:slug" element={<News />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<Industry />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/security-services" element={<SecurityServices />} />
        <Route path="/technology-services" element={<TechnologyServices />} />
        <Route
          path="/professional-services"
          element={<ProfessionalServices />}
        />
        <Route path="faqs" element={<FAQs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-&-conditions" element={<TermsAndConditions />} />
      </Routes>

      {/* site routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
