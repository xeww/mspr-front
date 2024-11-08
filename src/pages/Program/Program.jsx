/* Stylesheets imports */
import "./Program.css";

/* Components imports */
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import UpperPage from "../../components/UpperPage/UpperPage.jsx";
import MarginWrapper from "../../components/MarginWrapper/MarginWrapper.jsx";
import InfoBubble from "../../components/InfoBubble/InfoBubble.jsx";
import ConcertCard from "../../components/ConcertCard/ConcertCard.jsx";

/* Temporary/Testing imports */
import angele from "../../assets/angele.jpg";
import drake from "../../assets/drake.png";

export default function Program() {
  return (
    <>
      <Header />
      <UpperPage
        title="Le Programme"
        description="Découvrez le programme que nous avons préparer!"
      />
      <MarginWrapper>
        <Filters />
        <Concerts />
      </MarginWrapper>
      <Footer />
    </>
  );
}

function Filters() {
  return (
    <section className="filters-container">
      <InfoBubble
        title="Filtres"
        description="Trouvez le concert qui vous convient."
      />
    </section>
  );
}

function ArtistFilter() {
  //TODO
}

function SceneFilter() {
  //TODO
}

function DateFilter() {
  //TODO
}

function Concerts() {
  return (
    <section className="concerts-container">
      <ConcertCard
        image={angele}
        artistName="Angèle"
        date="18 Juin"
        time="18h30"
        sceneName="Scène Phénix"
      />

      <ConcertCard
        image={drake}
        artistName="Drake"
        date="20 Juin"
        time="20h30"
        sceneName="Scène Nova"
      />
    </section>
  );
}
