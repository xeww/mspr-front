import "./contact-form.css";
import Button from "../../../components/buttons/button.jsx";
import UserIcon from "../../../components/icons/user-icon.jsx";
import MailIcon from "../../../components/icons/mail-icon.jsx";
import MessageIcon from "../../../components/icons/message-icon.jsx";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (fullNameInput && emailInput && messageInput) {
      fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        body: JSON.stringify({
          fullName: fullNameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSubmitted(true);

          if (data.success) {
            setMessage(data.success);
            setError(false);
          }

          if (data.error) {
            setMessage(data.error);
            setError(true);
          }
        });
    }
  };

  return (
    <form className="contact-form-container">
      <AlertZone message={message} isError={error} submitted={submitted} />
      <FullNameInput />
      <EmailInput />
      <MessageInput />
      <Button text="Envoyer" isSubmit={false} onClick={handleClick} />
    </form>
  );
}

function AlertZone({ message, isError, submitted }) {
  return (
    <div
      className={
        "font-title contact-form-alert " +
        (isError ? "contact-form-alert__error" : "contact-form-alert__success")
      }
      style={{ display: submitted ? "block" : "none" }}
    >
      {message}
    </div>
  );
}

function FullNameInput() {
  return (
    <div id="contact-form-name-input" className="contact-form-input">
      <UserIcon />
      <input
        placeholder="Nom & Prénom"
        className="font-body glow"
        id="fullName"
        required
      ></input>
    </div>
  );
}

function EmailInput() {
  return (
    <div id="contact-form-email-input" className="contact-form-input">
      <MailIcon />
      <input
        type="email"
        placeholder="E-mail"
        className="font-body glow"
        id="email"
        required
      ></input>
    </div>
  );
}

function MessageInput() {
  return (
    <div id="contact-form-message-input" className="contact-form-input">
      <MessageIcon />
      <textarea
        placeholder="Message"
        className="font-body glow"
        id="message"
        required
      ></textarea>
    </div>
  );
}
