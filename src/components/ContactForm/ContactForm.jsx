import "./ContactForm.css";
import Button1 from "../Buttons/Button1.jsx";
import UserIcon from "../Icons/UserIcon.jsx";
import MailIcon from "../Icons/MailIcon.jsx";
import MessageIcon from "../Icons/MessageIcon.jsx";

export default function ContactForm() {
  return (
    <>
      <div className="contact-form-container">
        <div className="contact-form-first-row-container">
          <div id="contact-form-lname-input" className="contact-form-input">
            <UserIcon />
            <input placeholder="Nom" className="font-body"></input>
          </div>
          <div id="contact-form-fname-input" className="contact-form-input">
            <UserIcon />
            <input placeholder="Prénom" className="font-body"></input>
          </div>
        </div>
        <div id="contact-form-email-input" className="contact-form-input">
          <MailIcon />
          <input
            type="email"
            placeholder="E-mail"
            className="font-body"
          ></input>
        </div>
        <div id="contact-form-message-input" className="contact-form-input">
          <MessageIcon />
          <textarea placeholder="Message" className="font-body"></textarea>
        </div>
        <Button1 text="Envoyer" onClick={() => {}} />
      </div>
    </>
  );
}
