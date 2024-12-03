import "./home-page.css";
import backgroundImage from "../../assets/home_background.webp";
import questionOuImage from "../../assets/question_ou.webp";
import questionQuoiImage from "../../assets/question_quoi.webp";
import questionQuandImage from "../../assets/question_quand.webp";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import DoubleArrowDownIcon from "../../components/icons/double-arrow-down-icon.jsx";
import Question from "./question/question.jsx";
import Button from "../../components/buttons/button.jsx";
import { useLocation } from "wouter";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import ScrollBack from "../../components/scroll-back/scroll-back.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Showcase />
      <MarginWrapper>
        <Questions />
      </MarginWrapper>
      <Footer />
      <ScrollToTop />
      <ScrollBack />
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
  const [, setLocation] = useLocation();

  return (
    <section className="home-questions-container">
      <Question
        question="Nation Sounds, c'est quoi?"
        answer="Nation Sounds est un festival unique qui rassemble des artistes venus des quatre coins du monde.
          Célébrant la diversité musicale, il mêle sons électro, rythmes traditionnels et découvertes culturelles dans
           une ambiance festive et conviviale. Un rendez-vous incontournable pour les passionnés de musique."
        imageSource={questionQuoiImage}
        reversed={false}
      />

      <Question
        question="Quand?"
        answer="Nation Sounds a lieu chaque année pendant l'été, sur trois jours de musique non-stop. Préparez-vous à
           vivre un week-end intense de découvertes musicales, d'énergie et de festivités sous le soleil, avec des
           performances du matin jusqu'à tard dans la nuit."
        imageSource={questionQuandImage}
        reversed={true}
      />

      <Question
        question="Où?"
        answer="Le festival se déroule en plein air, dans un cadre naturel exceptionnel. Situé au bois de Vincennes,
          le site offre une expérience immersive au cœur de la nature, avec plusieurs scènes réparties pour profiter de
          chaque moment musical dans un décor unique."
        imageSource={questionOuImage}
        reversed={false}
      />

      <div className="learn-more-button-container">
        <Button
          text="En savoir plus"
          onClick={() => {
            setLocation("/programme");
          }}
        />
      </div>
    </section>
  );
}
