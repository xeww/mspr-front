import "./concert-info-page.css";
import { Redirect, useRoute } from "wouter";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import useConcert from "../../hooks/useConcert.js";
import { useEffect, useState } from "react";

export default function ConcertInfoPage() {
  const [match, params] = useRoute("/concert/:id");
  const [display, setDisplay] = useState(null);
  const concert = useConcert(params.id);

  useEffect(() => {
    if (concert && Object.keys(concert).length > 0) {
      setDisplay(
        <>
          <UpperPage
            title={concert.artist.name}
            description={concert.dateAndTime}
          />
          <MarginWrapper></MarginWrapper>
        </>,
      );
    }
  }, [concert]);

  if (!match && isNaN(params.id)) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      {display}
      <Footer />
    </>
  );
}
