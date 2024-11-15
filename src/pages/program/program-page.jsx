/* Stylesheets imports */
import "./program-page.css";

/* Components imports */
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import InfoBubble from "../../components/info-bubble/info-bubble.jsx";
import ConcertCard from "./concert-card/concert-card.jsx";

/* Lib imports */
import useConcert from "../../hooks/useConcert.js";

export default function ProgramPage() {
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

function Concerts() {
  const concerts = useConcert();

  return (
    <section className="concerts-container">
      {concerts &&
        concerts.map((concert) => (
          <ConcertCard
            key={concert.id}
            image={`${import.meta.env.VITE_IMAGES_URL}/${concert.artist.imageName}`}
            artistName={concert.artist.name}
            date="18 Juin"
            time="18h30"
            sceneName={concert.scene.name}
          />
        ))}
    </section>
  );
}
