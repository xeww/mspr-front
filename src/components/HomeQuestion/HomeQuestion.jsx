/* Stylesheets imports */
import "./HomeQuestion.css";

export default function HomeQuestion({ question, answer, imageSource }) {
  return (
    <div className="home-question-container">
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
