import "./upper-page.css";

export default function UpperPage({ title, description }) {
  return (
    <div className="upper-page-container">
      <h2 className="font-title">{title}</h2>
      <p className="font-body">{description}</p>
    </div>
  );
}
