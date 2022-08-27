import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import News from "./pages/News";
import Article from "./pages/Article";
import Contacts from "./pages/Contacts";
import Industries from "./pages/Industries";
import ResourceCenter from "./pages/ResourceCenter";
import Industry from "./pages/Industry";
import WhyUs from "./pages/WhyUs";

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
      </Routes>

      {/* site routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
