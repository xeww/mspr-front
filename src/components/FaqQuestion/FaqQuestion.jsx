import "./FaqQuestion.css";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../Icons/ArrowIcon.jsx";

// eslint-disable-next-line react/prop-types
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
    <>
      <div className="faq-question-container">
        <div>
          <p className="font-title">{question}</p>
          <p className="font-body" ref={answerRef}>
            {answer}
          </p>
        </div>
        <div
          className="faq-question-expand-button"
          onClick={handleClick}
          ref={buttonRef}
        >
          <ArrowIcon />
        </div>
      </div>
    </>
  );
}
