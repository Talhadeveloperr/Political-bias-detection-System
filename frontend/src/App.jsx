import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import BiasTrendsChart from "./components/BiasTrendsChart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chathistory from "./pages/Chathistory";
import Trends from "./pages/Trends";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chathistory" element={<Chathistory />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
