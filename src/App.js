import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";

const App = () => {
  return (
    <div className="App">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* site routes */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* site routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
