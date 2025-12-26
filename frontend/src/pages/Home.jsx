// pages/Home.jsx
import React from "react";
import MatrixBackground from "../components/MatrixBackground";
import BiasDetector from "../components/BiasDetector";

function Home() {
  return (
    <div className="home-page">
      <MatrixBackground />
      <BiasDetector />
    </div>
  );
}

export default Home;
