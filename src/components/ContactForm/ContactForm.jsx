/* Stylesheets imports */
import "./ContactForm.css";

/* Components imports */
import Button1 from "../Buttons/Button1.jsx";
import UserIcon from "../Icons/UserIcon.jsx";
import MailIcon from "../Icons/MailIcon.jsx";
import MessageIcon from "../Icons/MessageIcon.jsx";

export default function ContactForm() {
  const handleClick = () => {
    // TODO
  };

  return (
    <div className="contact-form-container">
      <FullNameInput />
      <EmailInput />
      <MessageInput />
      <Button1 text="Envoyer" onClick={handleClick} />
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
