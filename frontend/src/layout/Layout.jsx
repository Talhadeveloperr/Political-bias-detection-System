// layout/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <Navbar />
      <main>{children}</main>
      <Contact />
    </div>
  );
}