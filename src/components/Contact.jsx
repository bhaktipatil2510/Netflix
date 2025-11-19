import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <input type="text" placeholder="Phone Number" className="contact-input" />
          <textarea placeholder="Message" className="contact-textarea" rows="4"></textarea>
          <button type="submit" className="contact-button">SEND</button>
        </form>
      </div>
    </div>
  );
};
