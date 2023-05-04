import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.elements.user_email;
    if (!emailInput.value) {
      alert("Please enter your email address");
      return;
    }
    emailjs
      .sendForm(
        "service_xu90gov",
        "template_r06lip9",
        form.current,
        "1p7gFuJALJdPyZ8_N"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send Email Successfully");
          emailInput.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Input your email for latest updates</span>

        <form ref={form} onSubmit={sendEmail} className="form">
          <input type="email" name="user_email" placeholder="Email Address" />
          <input type="submit" value="Subscribe" className="button" />
        </form>

        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <a href="https://id.linkedin.com" className="icon">
            <FaLinkedinIn size={14} />
          </a>
          <a href="https://web.facebook.com/" className="icon">
            <FaFacebookF size={14} />
          </a>
          <a href="https://twitter.com/" className="icon">
            <FaTwitter size={14} />
          </a>
          <a href="https://instagram.com" className="icon">
            <FaInstagram size={14} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
