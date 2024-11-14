/* Stylesheets imports */
import "./contact-form.css";

/* Components imports */
import Button from "../../../components/buttons/button.jsx";
import UserIcon from "../../../components/icons/user-icon.jsx";
import MailIcon from "../../../components/icons/mail-icon.jsx";
import MessageIcon from "../../../components/icons/message-icon.jsx";

export default function ContactForm() {
  const handleClick = () => {
    // TODO
  };

  return (
    <div className="contact-form-container">
      <FullNameInput />
      <EmailInput />
      <MessageInput />
      <Button text="Envoyer" onClick={handleClick} />
    </div>
  );
}

function FullNameInput() {
  return (
    <div id="contact-form-name-input" className="contact-form-input">
      <UserIcon />
      <input placeholder="Nom & Prénom" className="font-body glow"></input>
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
      ></input>
    </div>
  );
}

function MessageInput() {
  return (
    <div id="contact-form-message-input" className="contact-form-input">
      <MessageIcon />
      <textarea placeholder="Message" className="font-body glow"></textarea>
    </div>
  );
}
