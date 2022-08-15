import { useEffect } from "react";

import { init, sendForm } from "@emailjs/browser";

import "./Form.css";

const Form = ({ formData, setFormData, setFormStatus }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData["from_email"] === "jacobhickman243@gmail.com") return;

    const contactNumber = document.querySelector("[name=contact_number");
    contactNumber.value = (Math.random() * 100000) | 0;

    const response = await sendForm(
      "service_zlo7mor",
      "template_w5xjr2k",
      e.target
    );
    setFormStatus((prev) => (prev = response.status));
    console.log(response.status);
    setFormData({
      ...formData,
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="from_name">Name:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          onChange={handleChange}
          required={true}
          placeholder="John Doe"
        />
        <label htmlFor="from_email">Email:</label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          onChange={handleChange}
          required={true}
          placeholder="johndoe@email.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          required={true}
          placeholder="Some message here..."
        ></textarea>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
