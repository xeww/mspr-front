/* Stylesheets imports */
import "./concert-card.css";

/* Components imports */
import CalendarLineIcon from "../../../components/icons/calendar-line-icon.jsx";
import TimeIcon from "../../../components/icons/time-icon.jsx";
import MapPinIcon from "../../../components/icons/map-pin-icon.jsx";

export default function ConcertCard({
  image,
  artistName,
  date,
  time,
  sceneName,
  onClick,
}) {
  return (
    <div className="concert-card-container glow" onClick={onClick}>
      <Top image={image} />
      <Bottom
        date={date}
        time={time}
        sceneName={sceneName}
        artistName={artistName}
      />
    </div>
  );
}

function Top({ image }) {
  return (
    <div className="concert-card-top-container">
      <img src={image} alt="Image d'un artiste" />
    </div>
  );
}

function Bottom({ date, time, sceneName, artistName }) {
  return (
    <div className="concert-card-bottom-container">
      <BottomInfo date={date} time={time} sceneName={sceneName} />
      <div className="concert-card-bottom-artist-name">
        <p className="font-title">{artistName}</p>
      </div>
    </div>
  );
}

function BottomInfo({ date, time, sceneName }) {
  return (
    <div className="concert-card-bottom-info-container">
      <div className="concert-card-bottom-single-info">
        <CalendarLineIcon />
        <p className="font-title">{date}</p>
      </div>

      <div className="concert-card-bottom-single-info">
        <TimeIcon />
        <p className="font-title">{time}</p>
      </div>

      <div className="concert-card-bottom-single-info">
        <MapPinIcon />
        <p className="font-title">{sceneName}</p>
      </div>
    </div>
  );
}
