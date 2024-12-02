import "./button.css";

export default function Button({ text, onClick, isSubmit }) {
  return (
    <button
      className="button-container font-title"
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}
