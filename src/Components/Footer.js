import React from "react";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import "../Components/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="text-copywrite">&copy; {currentYear} Furniture</p>
      <div className="social-media-container">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={Facebook}
            alt="Visit us on Facebook"
            className="social-media"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={Instagram}
            alt="Visit us on Instagram"
            className="social-media"
          />
        </a>
      </div>
    </footer>
  );
}
