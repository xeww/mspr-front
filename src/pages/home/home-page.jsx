/* Stylesheets imports */
import "./home-page.css";

/* Assets imports */
import backgroundImage from "../../assets/home_background.png";
import questionOneImage from "../../assets/question1.png";
import questionTwoImage from "../../assets/question2.png";
import questionThreeImage from "../../assets/question3.png";

/* Components imports */
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import DoubleArrowDownIcon from "../../components/icons/double-arrow-down-icon.jsx";
import Question from "./question/question.jsx";
import Button from "../../components/buttons/button.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Showcase />
      <Questions />
      <Footer />
    </>
  );
}

export function Showcase() {
  return (
    <section className="showcase-container">
      <img
        src={backgroundImage}
        alt="Image de fond"
        className="home-background-image"
      />

      <h2 className="font-title">
        Un festival <span className="font-special">unique</span>.
      </h2>

      <div className="sub-showcase-container">
        <DoubleArrowDownIcon />
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section className="home-questions-container">
      <Question
        question="Nation Sounds, c'est quoi?"
        answer="Nation Sounds est un festival unique qui rassemble des artistes venus des quatre coins du monde.
          Célébrant la diversité musicale, il mêle sons électro, rythmes traditionnels et découvertes culturelles dans
           une ambiance festive et conviviale. Un rendez-vous incontournable pour les passionnés de musique."
        imageSource={questionOneImage}
        reversed={false}
      />

      <Question
        question="Quand?"
        answer="Nation Sounds a lieu chaque année pendant l'été, sur trois jours de musique non-stop. Préparez-vous à
           vivre un week-end intense de découvertes musicales, d'énergie et de festivités sous le soleil, avec des
           performances du matin jusqu'à tard dans la nuit."
        imageSource={questionTwoImage}
        reversed={true}
      />

      <Question
        question="Où?"
        answer="Le festival se déroule en plein air, dans un cadre naturel exceptionnel. Situé au bois de Vincennes,
          le site offre une expérience immersive au cœur de la nature, avec plusieurs scènes réparties pour profiter de
          chaque moment musical dans un décor unique."
        imageSource={questionThreeImage}
        reversed={false}
      />

      <div className="learn-more-button-container">
        <Button text="En savoir plus" onClick={() => {}} />
      </div>
    </section>
  );
}
