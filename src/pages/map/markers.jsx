import { Icon } from "leaflet/src/layer/index.js";
import sceneIcon from "../../assets/icons8-scene-30.png";
import { Marker, Popup } from "react-leaflet";
import shopIcon from "../../assets/icons8-shop-30.png";
import wcIcon from "../../assets/icons8-portable-toilet-30.png";

export function SceneMarker({ scene }) {
  const icon = new Icon({
    iconUrl: sceneIcon,
    iconSize: [35, 35],
    iconAnchor: [20, 20],
    popupAnchor: [-3, -20],
  });

  return (
    <Marker
      icon={icon}
      key={scene.id}
      position={[scene.latitude, scene.longitude]}
    >
      <Popup>Scène {scene.name}</Popup>
    </Marker>
  );
}

export function StandMarker({ stand }) {
  const icon = new Icon({
    iconUrl: shopIcon,
    iconSize: [30, 30],
    iconAnchor: [20, 20],
    popupAnchor: [-3, -20],
  });

  return (
    <Marker
      icon={icon}
      key={stand.id}
      position={[stand.latitude, stand.longitude]}
    >
      <Popup>{stand.name}</Popup>
    </Marker>
  );
}

export function WCMarker({ wc }) {
  const icon = new Icon({
    iconUrl: wcIcon,
    iconSize: [30, 30],
    iconAnchor: [20, 20],
    popupAnchor: [-3, -20],
  });

  return (
    <Marker icon={icon} key={wc.id} position={[wc.latitude, wc.longitude]}>
      <Popup>WC {wc.type}</Popup>
    </Marker>
  );
}
