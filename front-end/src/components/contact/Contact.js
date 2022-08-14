import { useState } from "react";

import Form from "./form/Form";

import "./Contact.css";

const Contact = () => {
  const initialFormData = { user_name: "", email: "", message: "" };

  const [formData, setFormData] = useState({ ...initialFormData });

  return (
    <div className="contact-container">
      <div className="contact-title">Contact me</div>
      <div className="form-container">
        <Form formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default Contact;
