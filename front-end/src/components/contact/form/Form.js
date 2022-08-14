import React, { useEffect } from "react";

import { init, sendForm } from "@emailjs/browser";

import "./Form.css";

const Form = ({ formData, setFormData }) => {
  useEffect(() => {
    const abortController = new AbortController();
    init("DhXTn4Qp6lvBpmDrO");

    return () => abortController.abort();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactNumber = document.querySelector("[name=contact_number");
    contactNumber.value = (Math.random() * 100000) | 0;

    sendForm("service_zlo7mor", "template_w5xjr2k", e.target);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="contact_number" />
      <label htmlFor="user_name">Name:</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" onChange={handleChange} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" onChange={handleChange}></textarea>
      <button type="submit" className="btn btn-success">
        Send
      </button>
    </form>
  );
};

export default Form;
