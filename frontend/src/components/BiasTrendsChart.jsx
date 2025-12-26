// components/BiasTrendsChart.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const POLITICAL_KEYWORDS = [
  "pmln", "pti", "ppp", "mqm", "jui-f", "ji", "anp", "bnp", "tlp", "aml",
  "nawaz", "imran", "bhutto", "benazir", "zardari", "bilawal", "shahbaz", "maryam",
  "sc", "supreme court", "parliament", "senate", "army", "nab", "fbr", "ecp",
  "cpec", "loc", "election", "government", "opposition", "prime minister", "president",
  "ministry", "political", "party", "vote", "democracy", "coalition"
];

function BiasTrendsChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("biasHistory")) || [];

    const counts = {};
    POLITICAL_KEYWORDS.forEach((k) => (counts[k] = 0));
    counts["other"] = 0;

    history.forEach((item) => {
      const text = item.text.toLowerCase();
      let matched = false;

      POLITICAL_KEYWORDS.forEach((keyword) => {
        if (text.includes(keyword)) {
          counts[keyword]++;
          matched = true;
        }
      });

      if (!matched) counts["other"]++;
    });

    const labels = Object.keys(counts).filter((k) => counts[k] > 0);
    const values = labels.map((k) => counts[k]);

    setChartData({
      labels,
      datasets: [
        {
          label: "Keyword Frequency",
          data: values,
          backgroundColor: "#00ff99",
        },
      ],
    });
  }, []);

  if (!chartData) {
    return <p className="empty-text">No trend data available.</p>;
  }

  return (
    <div className="chart-wrapper">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "#00ff99",
              },
            },
          },
          scales: {
            x: {
              ticks: { color: "#ccc" },
              grid: { color: "#222" },
            },
            y: {
              ticks: { color: "#ccc" },
              grid: { color: "#222" },
            },
          },
        }}
      />
    </div>
  );
}

export default BiasTrendsChart;
