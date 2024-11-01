import "./ContactForm.css";
import Button1 from "../Buttons/Button1.jsx";

export default function ContactForm() {
  return (
    <>
      <div className="contact-form-container">
        <div className="contact-form-first-row-container">
          <input
            placeholder="Nom"
            className="contact-form-lastname-input font-body"
          ></input>
          <input
            placeholder="Prénom"
            className="contact-form-lastname-input font-body"
          ></input>
        </div>
        <input type="email" placeholder="E-mail" className="font-body"></input>
        <textarea placeholder="Message" className="font-body"></textarea>
        <Button1 text="Envoyer" onClick={() => {}} />
      </div>
    </>
  );
}
