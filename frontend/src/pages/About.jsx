import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <h2>About Our Project</h2>
      <p>
        The <strong>Political Bias Detection System</strong> is designed to analyze
        news articles and identify political bias in the context of Pakistan’s
        politics. Using advanced natural language processing (NLP) models, the
        system helps readers understand whether a given piece of news text
        leans toward a particular political stance or remains neutral.
      </p>
      <p>
        Users can simply input a news article, and the system detects its bias level
        in real-time. This project aims to promote transparency in media and empower
        people to form their opinions based on unbiased information.
      </p>
      <p>
        You can also use our <strong>API</strong> to integrate bias detection capabilities
        into your own applications.
      </p>
    </div>
  );
}

export default About;
