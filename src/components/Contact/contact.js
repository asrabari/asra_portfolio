import React, { useState } from "react";
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleValidation = (e) => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="contactSection">
      <h2 className="contactTitle">Contact <span>Me</span></h2>
      
      <form
        className="contactForm"
        action="https://formsubmit.co/asrajannat2003@gmail.com"
        method="POST"
        //onSubmit={handleValidation}
      >
        <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_subject" value="New Contact Message from Portfolio" />


        <div className="formGroup">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="sendBtn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
