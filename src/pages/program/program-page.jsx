import "./program-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import InfoBubble from "../../components/info-bubble/info-bubble.jsx";
import ConcertCard from "./concert-card/concert-card.jsx";
import useConcert from "../../hooks/useConcert.js";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { getFullDate, getHour } from "../../utils/date.js";
import Filters from "./filters/filters.jsx";

export const FilterContext = createContext(null);

function FilterProvider({ children }) {
  const [filterSelection, setFilterSelection] = useState({
    artist: [],
    scene: [],
    date: [],
  });

  return (
    <FilterContext.Provider value={{ filterSelection, setFilterSelection }}>
      {children}
    </FilterContext.Provider>
  );
}

export default function ProgramPage() {
  return (
    <FilterProvider>
      <Header />
      <UpperPage
        title="Le Programme"
        description="Découvrez le programme que nous avons préparer!"
      />
      <MarginWrapper>
        <InfoBubble
          title="Filtres"
          description="Trouvez le concert qui vous convient."
        />
        <Filters />
        <Concerts />
      </MarginWrapper>
      <Footer />
    </FilterProvider>
  );
}

function Concerts() {
  const container = useRef({});
  const concerts = useConcert();
  const [, setLocation] = useLocation();
  const { filterSelection } = useContext(FilterContext);
  const [filteredConcerts, setFilteredConcerts] = useState([]);

  const handleClick = (id) => {
    setLocation(`/concert/${id}`);
  };

  const handleFilters = () => {
    const sceneSelectionIds = filterSelection["scene"].map((scene) => scene.id);
    const artistSelectionIds = filterSelection["artist"].map(
      (artist) => artist.id,
    );

    if (concerts) {
      let filtered = concerts.filter((concert) =>
        sceneSelectionIds.includes(concert.scene.id),
      );

      filtered = filtered.filter((concert) =>
        artistSelectionIds.includes(concert.artist.id),
      );

      setFilteredConcerts(filtered);
    } else {
      setFilteredConcerts([]);
    }
  };

  useEffect(() => {
    handleFilters();
  }, [filterSelection]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="concerts-container" ref={container}>
      {filteredConcerts.map((concert) => (
        <ConcertCard
          key={concert.id}
          image={`${import.meta.env.VITE_IMAGES_URL}/${concert.artist.imageName}`}
          artistName={concert.artist.name}
          date={getFullDate(concert.dateAndTime)}
          time={getHour(concert.dateAndTime)}
          sceneName={concert.scene.name}
          onClick={() => handleClick(concert.id)}
        />
      ))}
    </section>
  );
}
