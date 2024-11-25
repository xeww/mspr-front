import "./faq-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import ContactForm from "./contact-form/contact-form.jsx";
import InfoBubble from "../../components/info-bubble/info-bubble.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import ArrowIcon from "../../components/icons/arrow-icon.jsx";
import { useState } from "react";

export default function FaqPage() {
  return (
    <>
      <Header />
      <UpperPage title="FAQ & Contact" description="Des questions?" />
      <MarginWrapper>
        <Questions />
        <InfoBubble
          title="D&#39;autres questions?"
          description="Contactez notre équipe via un formulaire dédié."
        />
        <ContactForm />
      </MarginWrapper>
      <Footer />
    </>
  );
}

export function Questions() {
  return (
    <section className="faq-questions-container">
      <Question
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
      />

      <Question
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
      />

      <Question
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
      />

      <Question
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
      />

      <Question
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
      />
    </section>
  );
}

function Question({ question, answer }) {
  const [isToggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="faq-question-container glow" onClick={handleClick}>
      <div>
        <p className="font-title">{question}</p>
        <p
          className={
            "font-body faq-question-answer " +
            (isToggled
              ? "faq-question-answer__enable"
              : "faq-question-answer__disable")
          }
        >
          {answer}
        </p>
      </div>
      <div
        className={
          "faq-question-expand-button " +
          (isToggled
            ? "faq-question-expand-button__enable"
            : "faq-question-expand-button__disable")
        }
      >
        <ArrowIcon />
      </div>
    </div>
  );
}
