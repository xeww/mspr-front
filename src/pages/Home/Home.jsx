import "./Home.css";
import backgroundImage from "../../assets/home_background.png";
import questionOneImage from "../../assets/question1.png";
import questionTwoImage from "../../assets/question2.png";
import questionThreeImage from "../../assets/question3.png";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import DoubleArrowDownIcon from "../../components/Icons/DoubleArrowDownIcon.jsx";
import HomeQuestion from "../../components/HomeQuestion/HomeQuestion.jsx";
import Button1 from "../../components/Buttons/Button1.jsx";

export default function Home() {
  return (
    <>
      <Header />

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

      <section className="home-questions-container">
        <HomeQuestion
          question="Nation Sounds, c'est quoi?"
          answer="Nation Sounds est un festival unique qui rassemble des artistes venus des quatre coins du monde.
          Célébrant la diversité musicale, il mêle sons électro, rythmes traditionnels et découvertes culturelles dans
           une ambiance festive et conviviale. Un rendez-vous incontournable pour les passionnés de musique."
          imageSource={questionOneImage}
        />

        <HomeQuestion
          question="Quand?"
          answer="Nation Sounds a lieu chaque année pendant l'été, sur trois jours de musique non-stop. Préparez-vous à
           vivre un week-end intense de découvertes musicales, d'énergie et de festivités sous le soleil, avec des
           performances du matin jusqu'à tard dans la nuit."
          imageSource={questionTwoImage}
        />

        <HomeQuestion
          question="Où?"
          answer="Le festival se déroule en plein air, dans un cadre naturel exceptionnel. Situé au bois de Vincennes,
          le site offre une expérience immersive au cœur de la nature, avec plusieurs scènes réparties pour profiter de
          chaque moment musical dans un décor unique."
          imageSource={questionThreeImage}
        />

        <div className="learn-more-button-container">
          <Button1 text="En savoir plus" onClick={() => {}} />
        </div>
      </section>

      <Footer />
    </>
  );
}
