/* Stylesheets imports */
import "./question.css";
import { useEffect, useRef } from "react";

export default function Question({ question, answer, imageSource, reversed }) {
  const container = useRef(null);

  useEffect(() => {
    if (reversed && container.current) {
      container.current.style.flexDirection = "row-reverse";
    }
  }, [reversed]);

  return (
    <div className="home-question-container" ref={container}>
      <Text question={question} answer={answer} />
      <Image imageSource={imageSource} />
    </div>
  );
}

function Text({ question, answer }) {
  return (
    <div className="home-question-text-container">
      <p className="font-title">{question}</p>
      <div className="home-question-text-line"></div>
      <p className="font-body">{answer}</p>
    </div>
  );
}

function Image({ imageSource }) {
  return <img src={imageSource} alt="Image d'illustration" />;
}
