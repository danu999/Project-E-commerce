import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Input your email for latest updates</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <a href="https://id.linkedin.com" target="_blank" className="icon">
            <FaLinkedinIn size={14} />
          </a>
          <a href="https://web.facebook.com/" target="_blank" className="icon">
            <FaFacebookF size={14} />
          </a>
          <a href="https://twitter.com/" target="_blank" className="icon">
            <FaTwitter size={14} />
          </a>
          <a href="https://instagram.com" target="_blank" className="icon">
            <FaInstagram size={14} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
