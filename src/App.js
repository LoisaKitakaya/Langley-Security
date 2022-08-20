import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import ResourceCenter from "./pages/ResourceCenter";

import "./App.css";

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
      </Routes>

      {/* site routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
