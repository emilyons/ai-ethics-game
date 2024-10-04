import React, { useState } from "react";
import "./ChapterTwo.scss";

const dataItems = [
  { id: 1, name: "Password", answer: "Strong Password" },
  { id: 2, name: "Email", answer: "Email Encryption" },
  { id: 3, name: "Location", answer: "Disable Location Sharing" },
  { id: 4, name: "Social Security Number", answer: "Never Share Online" },
];

const securityPractices = [
  "Strong Password",
  "Email Encryption",
  "Disable Location Sharing",
  "Never Share Online",
];

const ChapterTwo = () => {
  const [matchedItems, setMatchedItems] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleMatch = (dataItem, practice) => {
    const isCorrect = dataItem.answer === practice;
    setMatchedItems({ ...matchedItems, [dataItem.id]: practice });
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (
    <div className="chapter-two">
      <h1>Chapter 2: The Data Dilemma</h1>
      <p>
        Learn how to protect your personal data by matching data items to their best security practices!
      </p>

      <div className="game-area">
        <div className="data-items">
          <h2>Data Items</h2>
          {dataItems.map((item) => (
            <div key={item.id} className="data-item">
              {item.name}
            </div>
          ))}
        </div>

        <div className="security-practices">
          <h2>Security Practices</h2>
          {securityPractices.map((practice, index) => (
            <button
              key={index}
              onClick={() =>
                handleMatch(dataItems[correctAnswers], practice)
              }
            >
              {practice}
            </button>
          ))}
        </div>
      </div>

      <p>Correct Answers: {correctAnswers} out of {dataItems.length}</p>

      {correctAnswers === dataItems.length && (
        <button onClick={() => alert("Next Challenge!")}>
          Proceed to Next Lesson
        </button>
      )}
    </div>
  );
};

export default ChapterTwo;

