import { useState } from "react";

import Form from "./form/Form";
import Alert from "../utils/Alert";

import "./Contact.css";

const Contact = () => {
  const initialFormData = { from_name: "", from_email: "", message: "" };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [formStatus, setFormStatus] = useState(400);

  return (
    <div className="contact-container">
      <div className="contact-title">Contact me</div>
      <Form
        formData={formData}
        setFormData={setFormData}
        setFormStatus={setFormStatus}
      />
      {formStatus === 200 ? (
        <Alert
          message={"Thanks! You're message has been received!"}
          formStatus={formStatus}
          setFormStatus={setFormStatus}
        />
      ) : formStatus === 400 ? (
        <Alert
          message={"Sorry, something went wrong. Please try again"}
          formStatus={formStatus}
          setFormStatus={setFormStatus}
        />
      ) : null}
    </div>
  );
};

export default Contact;
