import React from "react";
import "./Footer.module.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Multi-Page Site</p>
    </footer>
  );
}

export default Footer;
