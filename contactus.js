import React, { useState } from "react";
import "./contactus.css"; // Import the CSS file for styling
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.telephone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send email
    try {
      await axios.post("http://localhost:8080/send-email", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us using the contact form or other methods below:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="telephone">Telephone Number:</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="Your Telephone Number"
          value={formData.telephone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Contact Information:</h3>
        <p>Call us: <a href="tel:+250783499640">0783499640</a></p>
        <p>Email us: <a href="oliviermanzi213@gmail.com">oliviermanzi213@gmail.com</a></p>
      </div>

      <div className="location-info">
        <h3>Visit Us:</h3>
        <p>123 Hospital Street, Cityville, Country</p>
        <p>
          View on Google Maps:{" "}
          <a
            href="https://www.google.com/maps/place/123+Hospital+Street,+Cityville,+Country"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
