import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import ResourceCenter from "./pages/ResourceCenter";

import "./App.css";
import News from "./pages/News";
import Article from "./pages/Article";

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
      </Routes>

      {/* site routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
