import "./Button1.css";

// eslint-disable-next-line react/prop-types
export default function Button1({ text, onClick }) {
  return (
    <button className="button1-container font-title" onClick={onClick}>
      {text}
    </button>
  );
}
