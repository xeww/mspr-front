import "./faq-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import ContactForm from "./contact-form/contact-form.jsx";
import InfoBubble from "../../components/info-bubble/info-bubble.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import ArrowIcon from "../../components/icons/arrow-icon.jsx";
import { useState } from "react";
import ScrollBack from "../../components/scroll-back/scroll-back.jsx";

export default function FaqPage() {
  return (
    <>
      <Header />
      <UpperPage title="FAQ & Contact" description="Des questions?" />
      <MarginWrapper>
        <InfoBubble
          title="Questions fréquentes"
          description="Quelques questions souvent demandées"
        />
        <Questions />
        <InfoBubble
          title="D&#39;autres questions?"
          description="Contactez notre équipe via un formulaire dédié."
        />
        <ContactForm />
      </MarginWrapper>
      <Footer />
      <ScrollBack />
    </>
  );
}

export function Questions() {
  return (
    <section className="faq-questions-container">
      <Question
        question="Quelles sont les dates du festival ?"
        answer="Le festival se déroulera à partir de début juin jusqu'au mois de juillet. Assurez-vous de noter ces dates dans votre agenda pour ne pas manquer les événements !"
      />

      <Question
        question="Où se déroule le festival ?"
        answer="Le festival se tient au bois de vincennes, dans Paris. Vous trouverez un plan détaillé du site sur notre page 'Carte' pour faciliter votre venue."
      />

      <Question
        question="Comment puis-je acheter des billets ?"
        answer="Vous pouvez acheter vos billets directement sur le site de notre partenaire, Ticketmaster, veuillez vous cliquer sur la catégorie 'Billetterie' dans le menu pour plus d'information."
      />

      <Question
        question="Y a-t-il des réductions pour les étudiants ou les groupes ?"
        answer="Oui, nous offrons des réductions spéciales pour les étudiants, ainsi que des tarifs de groupe. Pour plus de détails, consultez la page 'Billetterie' ou contactez notre équipe à l'aide du formulaire de contact."
      />

      <Question
        question="Puis-je ramener ma nourriture ou mes boissons ?"
        answer="Pour des raisons de sécurité et de réglementation, il n’est pas permis de ramener de nourriture ou de boissons de l’extérieur. Toutefois, de nombreux stands de nourriture et de boissons seront disponibles sur place."
      />

      <Question
        question="Puis-je venir avec mon chien ou mon animal de compagnie ?"
        answer="Les animaux de compagnie ne sont pas autorisés sur le site du festival, sauf pour les animaux d'assistance. Nous vous prions de respecter cette règle pour le confort de tous."
      />

      <Question
        question="Quelles mesures sont prises en matière de sécurité ?"
        answer="La sécurité de nos festivaliers est notre priorité. Des contrôles de sécurité seront effectués à l’entrée du site. Merci de venir sans objets interdits (armes, bouteilles en verre, etc.) et d’être prêt à coopérer avec nos agents de sécurité."
      />

      <Question
        question="Est-ce que le festival est accessible aux personnes en situation de handicap ?"
        answer="Oui, le festival est accessible aux personnes en situation de handicap. Des rampes, des places de parking dédiées et des sanitaires adaptés sont disponibles sur le site. Si vous avez des besoins spécifiques, n’hésitez pas à nous contacter avant votre venue."
      />

      <Question
        question="Quelles sont les règles concernant les photographies et vidéos ?"
        answer="La prise de photos est autorisée pour un usage personnel. Cependant, l'utilisation de caméras professionnelles ou de drones est interdite sans autorisation préalable. Des photographes et vidéastes officiels seront présents sur place, et nous vous invitons à respecter leur travail."
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
