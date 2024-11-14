/* Stylesheets imports */
import "./map-page.css";
import "leaflet/dist/leaflet.css";

/* Components imports */
import UpperPage from "../../components/upper-page/upper-page.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import StoreIcon from "../../components/icons/store-icon.jsx";
import SceneIcon from "../../components/icons/scene-icon.jsx";
import WcIcon from "../../components/icons/wc-icon.jsx";

/* Lib imports */
import { useEffect, useRef, useState } from "react";
import { Circle, MapContainer, TileLayer } from "react-leaflet";

export default function MapPage() {
  return (
    <>
      <Header />
      <UpperPage
        title="Carte Interactive"
        description="Localisez les lieux du festival ici!"
      />
      <Filters />
      <LeafletMap />
      <Footer />
    </>
  );
}

function LeafletMap() {
  const center = [48.82839101465429, 2.433085355121854];
  return (
    <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Circle center={center} pathOptions={{ color: "blue" }} radius={900} />
    </MapContainer>
  );
}

function Filters() {
  return (
    <section className="map-filters-container">
      <SingleFilter icon={<StoreIcon />} text="Stands" />
      <SingleFilter icon={<SceneIcon />} text="Scènes" />
      <SingleFilter icon={<WcIcon />} text="WC" />
    </section>
  );
}

function SingleFilter({ icon, text }) {
  const [isToggled, setToggled] = useState(true);
  const container = useRef(null);

  useEffect(() => {
    if (isToggled) {
      container.current.style.border = "2px solid var(--orange)";
    } else {
      container.current.style.border = "2px solid transparent";
    }
  }, [isToggled]);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  return (
    <div
      className="single-map-filter-container"
      onClick={handleClick}
      ref={container}
    >
      {icon}
      <p className="font-title">{text}</p>
    </div>
  );
}
