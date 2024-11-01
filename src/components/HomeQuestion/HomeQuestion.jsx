import "./HomeQuestion.css";

// eslint-disable-next-line react/prop-types
export default function HomeQuestion({ question, answer, imageSource }) {
  return (
    <>
      <div className="home-question-container">
        <div className="home-question-text-container">
          <p className="font-title">{question}</p>
          <div className="home-question-text-line"></div>
          <p className="font-body">{answer}</p>
        </div>
        <img src={imageSource} alt="Image d'illustration" />
      </div>
    </>
  );
}
