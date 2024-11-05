/* Stylesheets imports */
import "./Button1.css";

export default function Button1({ text, onClick }) {
  return (
    <button className="button1-container font-title" onClick={onClick}>
      {text}
    </button>
  );
}
