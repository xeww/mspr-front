import "./Faq.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FaqQuestion from "../../components/FaqQuestion/FaqQuestion.jsx";
import UpperPage from "../../components/UpperPage/UpperPage.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import InfoBubble from "../../components/InfoBubble/InfoBubble.jsx";

export default function Faq() {
  return (
    <>
      <Header />
      <UpperPage title="FAQ & Contact" description="Des questions?" />

      <div className="wrapper">
        <div className="faq-questions-container">
          <FaqQuestion
            question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
          />

          <FaqQuestion
            question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
          />

          <FaqQuestion
            question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
          />

          <FaqQuestion
            question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
          />

          <FaqQuestion
            question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
         commodo consequat."
          />
        </div>
        <InfoBubble
          title="D&#39;autres questions?"
          description="Contactez notre équipe via un formulaire dédié."
        />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
