import "./concert-info-page.css";
import { Redirect, useRoute } from "wouter";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import { useEffect, useState } from "react";
import MapPinIcon from "../../components/icons/map-pin-icon.jsx";
import Button from "../../components/buttons/button.jsx";
import { getFullDateAndHour } from "../../utils/date.js";
import useData from "../../hooks/useData.js";

export default function ConcertInfoPage() {
  const [match, params] = useRoute("/concert/:id");
  const [display, setDisplay] = useState(null);

  if (!match && isNaN(params.id)) {
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const concert = useData(params.id, "concert");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (concert && Object.keys(concert).length > 0) {
      setDisplay(
        <>
          <UpperPage
            title={concert.artist.name}
            description={getFullDateAndHour(concert.dateAndTime)}
          />
          <MarginWrapper>
            <ConcertInfo
              scene={concert.scene}
              imageUrl={`${import.meta.env.VITE_IMAGES_URL}/${concert.artist.imageName}`}
              artist={concert.artist}
            />
          </MarginWrapper>
        </>,
      );
    }
  }, [concert]);

  return (
    <>
      <Header />
      {display}
      <Footer />
    </>
  );
}

function ConcertInfo({ scene, imageUrl, artist }) {
  const handleClick = () => {
    return <Redirect to="/carte" />;
  };

  return (
    <>
      <section className="concert-info-container">
        <div className="concert-info-scene-container">
          <MapPinIcon />
          <p className="font-title">Scène {scene?.name ?? "Erreur"}</p>
        </div>
        <img src={imageUrl} alt={`Image de ${artist?.name ?? "Erreur"}`} />
        <p className="font-body concert-info-description">
          {artist?.description ?? "Erreur"}
        </p>

        <Button text="Voir sur la carte" onClick={handleClick} />
      </section>
    </>
  );
}
