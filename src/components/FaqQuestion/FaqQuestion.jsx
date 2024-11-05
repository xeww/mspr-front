/* Stylesheets imports */
import "./FaqQuestion.css";

/* Components imports */
import ArrowIcon from "../Icons/ArrowIcon.jsx";

/* Hooks imports */
import { useEffect, useRef, useState } from "react";

export default function FaqQuestion({ question, answer }) {
  const [isToggled, setToggled] = useState(false);
  const answerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    answerRef.current.style.display = isToggled ? "block" : "none";
    buttonRef.current.style.transform = isToggled
      ? "rotate(180deg)"
      : "rotate(0)";
  }, [isToggled]);

  return (
    <div className="faq-question-container glow" onClick={handleClick}>
      <div>
        <p className="font-title">{question}</p>
        <p className="font-body" ref={answerRef}>
          {answer}
        </p>
      </div>
      <div className="faq-question-expand-button" ref={buttonRef}>
        <ArrowIcon />
      </div>
    </div>
  );
}
