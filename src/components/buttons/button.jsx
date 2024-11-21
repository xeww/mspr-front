import "./button.css";

export default function Button({ text, onClick }) {
  return (
    <button className="button-container font-title" onClick={onClick}>
      {text}
    </button>
  );
}
