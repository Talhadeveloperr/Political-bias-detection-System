// components/ChatHistory.jsx
import React, { useEffect, useState } from "react";
import "../styles/history.css";

function ChatHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("biasHistory")) || [];
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("biasHistory");
    setHistory([]);
  };

  return (
    <div className="history-page">
      <h2>Detection History</h2>

      {history.length === 0 ? (
        <p className="empty-text">No detection history available.</p>
      ) : (
        <>
          <button className="clear-history-btn" onClick={clearHistory}>
            Clear History
          </button>

          <div className="history-list">
            {history.map((item, index) => (
              <div className="history-card" key={index}>
                <p className="history-input">
                  <strong>Input:</strong> {item.text}
                </p>
                <p className="history-output">
                  <strong>Bias:</strong> {item.prediction}
                </p>
                <span className="history-time">{item.time}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ChatHistory;
