import "./map-page.css";
import "leaflet/dist/leaflet.css";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import useData from "../../hooks/useData.js";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import sceneIcon from "../../assets/icons8-scene-30.png";
import shopIcon from "../../assets/icons8-shop-30.png";
import wcIcon from "../../assets/icons8-portable-toilet-30.png";
import { SceneMarker, StandMarker, WCMarker } from "./markers.jsx";

const MapFilterContext = createContext(null);

function MapFilterProvider({ children }) {
  const [standFilter, setStandFilter] = useState(true);
  const [sceneFilter, setSceneFilter] = useState(true);
  const [wcFilter, setWcFilter] = useState(true);

  return (
    <MapFilterContext.Provider
      value={{
        standFilter,
        setStandFilter,
        sceneFilter,
        setSceneFilter,
        wcFilter,
        setWcFilter,
      }}
    >
      {children}
    </MapFilterContext.Provider>
  );
}

export default function MapPage() {
  return (
    <MapFilterProvider>
      <Header />
      <UpperPage
        title="Carte Interactive"
        description="Localisez les lieux du festival ici!"
      />
      <MarginWrapper>
        <Filters />
        <LeafletMap />
      </MarginWrapper>
      <Footer />
    </MapFilterProvider>
  );
}

function LeafletMap() {
  const { standFilter, sceneFilter, wcFilter } = useContext(MapFilterContext);

  const center = [48.82839101465429, 2.433085355121854];

  const scenes = useData(-1, "scene");
  const stands = useData(-1, "stand");
  const wcs = useData(-1, "wc");

  const sceneMarkers = () => {
    if (sceneFilter && scenes) {
      return scenes.map((scene) => (
        <SceneMarker key={scene.id} scene={scene} />
      ));
    }
  };

  const standMarkers = () => {
    if (standFilter && stands) {
      return stands.map((stand) => (
        <StandMarker key={stand.id} stand={stand} />
      ));
    }
  };

  const wcMarkers = () => {
    if (wcFilter && wcs) {
      return wcs.map((wc) => <WCMarker key={wc.id} wc={wc} />);
    }
  };

  return (
    <MapContainer center={center} zoom={17} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {sceneMarkers()}
      {standMarkers()}
      {wcMarkers()}
    </MapContainer>
  );
}

function Filters() {
  return (
    <section className="map-filters-container">
      <SingleFilter imageSrc={shopIcon} text="Stands" type="stand" />
      <SingleFilter imageSrc={sceneIcon} text="Scènes" type="scene" />
      <SingleFilter imageSrc={wcIcon} text="WC" type="wc" />
    </section>
  );
}

function SingleFilter({ imageSrc, text, type }) {
  const { setStandFilter, setSceneFilter, setWcFilter } =
    useContext(MapFilterContext);

  const [isToggled, setToggled] = useState(true);

  const container = useRef(null);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    switch (type) {
      case "stand":
        setStandFilter(isToggled);
        break;
      case "scene":
        setSceneFilter(isToggled);
        break;
      case "wc":
        setWcFilter(isToggled);
        break;
    }
  }, [isToggled]);

  return (
    <div
      className={
        "single-map-filter-container " +
        (isToggled
          ? "single-map-filter-container__enabled"
          : "single-map-filter-container__disabled")
      }
      onClick={handleClick}
      ref={container}
    >
      <img src={imageSrc} alt="Icône" />
      <p className="font-title">{text}</p>
    </div>
  );
}
