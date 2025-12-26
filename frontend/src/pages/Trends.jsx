// pages/Trends.jsx
import React from "react";
import BiasTrendsChart from "../components/BiasTrendsChart";
import "../styles/trends.css";

function Trends() {
  return (
    <div className="trends-page">
      <h2 className="trends-title">User Political Trends</h2>
      <p className="trends-desc">
        These trends are generated from your entered text only.
      </p>

      <BiasTrendsChart />
    </div>
  );
}

export default Trends;
