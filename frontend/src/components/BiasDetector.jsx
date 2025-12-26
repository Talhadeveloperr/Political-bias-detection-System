// components/BiasDetector.jsx
import React, { useState } from "react";
import "../styles/home.css";
import "../styles/spinner.css";

function BiasDetector() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data);

      // 🔹 Store history in localStorage
      const history = JSON.parse(localStorage.getItem("biasHistory")) || [];
      history.unshift({
        text,
        prediction: data.prediction,
        time: new Date().toLocaleString(),
      });
      localStorage.setItem("biasHistory", JSON.stringify(history));
    } catch (error) {
      setResult({ prediction: "Backend connection failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bias-detector-container">
      <h2 className="title">Political Bias Detector</h2>

      <form className="bias-form" onSubmit={handleSubmit}>
        <textarea
          className="bias-input"
          rows="4"
          placeholder="Enter a political or news statement..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className={`bias-button ${loading ? "animate-neon-glow" : ""}`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Detect Bias"}
        </button>
      </form>

      {loading && <div className="spinner"></div>}

      {result && (
        <div className="result-box">
          <strong>Prediction:</strong> {result.prediction}
        </div>
      )}
    </div>
  );
}

export default BiasDetector;
