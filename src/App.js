import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/home";
import PlayStation from  "./pages/playStation/playStation";
import Nintendo from  "./pages/nintendo/nintendo";
import TvAdaptation from  "./pages/tv/tvAdaptation";
import Computer from "./pages/computer/computer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/playstation" element={<PlayStation />} />
        <Route path="/nintendo" element={<Nintendo />} />
        <Route path="/tv-adaptation" element={<TvAdaptation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
