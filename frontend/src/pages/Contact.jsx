import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        <h3>Contact Us</h3>
        <p>We’d love to hear from you! Reach out for any inquiries, feedback, or collaboration ideas.</p>
        <ul className="contact-details">
          <li><strong>Email:</strong> support@biasdetection.pk</li>
          <li><strong>Phone:</strong> +92 3205929108</li>
          <li><strong>Address:</strong> Gujranwala, Pakistan</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Political Bias Detection System — All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Contact;
