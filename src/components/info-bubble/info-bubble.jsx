/* Stylesheets imports */
import "./info-bubble.css";

export default function InfoBubble({ title, description }) {
  return (
    <div className="info-bubble-container">
      <h3 className="font-title">{title}</h3>
      <div className="info-bubble-line"></div>
      <p className="font-body">{description}</p>
    </div>
  );
}
