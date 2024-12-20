import "./question.css";

export default function Question({ question, answer, imageSource, reversed }) {
  return (
    <div
      className={
        "home-question-container" +
        (reversed ? " home-question-container__reverse" : "")
      }
    >
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
