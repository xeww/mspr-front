/* Stylesheets imports */
import "./ConcertCard.css";

/* Components imports */
import CalendarLineIcon from "../Icons/CalendarLineIcon.jsx";
import TimeIcon from "../Icons/TimeIcon.jsx";
import MapPinIcon from "../Icons/MapPinIcon.jsx";

export default function ConcertCard({
  image,
  artistName,
  date,
  time,
  sceneName,
}) {
  return (
    <div className="concert-card-container glow">
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
