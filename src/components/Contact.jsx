import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Reach out to us for more information.
      </p>
      <form className="contact-form">
        <input
          type="text"
          className="contact-input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
