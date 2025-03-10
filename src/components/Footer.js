import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>🌅 RajTrail</h2>
        <p>Explore the rich heritage and beauty of Rajasthan with us!</p>

        {/* Footer Navigation Links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/culture">Culture</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
        </div>

        <p className="footer-text">© {new Date().getFullYear()} RajTrail. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
