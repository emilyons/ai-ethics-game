import React, { useState, useEffect } from "react";
import "./Ch2Game.scss";

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

const Ch2Game = () => {
  const [matchedItems, setMatchedItems] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleMatch = (dataItem, practice) => {
    const isCorrect = dataItem.answer === practice;
    setMatchedItems({ ...matchedItems, [dataItem.id]: practice });
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const onDragStart = (e, dataItem) => {
    e.dataTransfer.setData("dataItem", JSON.stringify(dataItem));
  };

  const onDrop = (e, practice) => {
    e.preventDefault();
    const dataItem = JSON.parse(e.dataTransfer.getData("dataItem"));
    handleMatch(dataItem, practice);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("Ch2Game component mounted");
  }, []);

  console.log("Rendering Ch2Game component");

  return (
    <div className="game-area" style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>Chapter Two Game</h1>
      <div className="data-items">
        <h2>Data Items</h2>
        {dataItems.map((item) => (
          <div
            key={item.id}
            className="data-item"
            draggable
            onDragStart={(e) => onDragStart(e, item)}
            style={{ margin: '10px', padding: '5px', border: '1px solid #000', display: 'inline-block' }}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="security-practices">
        <h2>Security Practices</h2>
        {securityPractices.map((practice, index) => (
          <div
            key={index}
            className="practice-drop-zone"
            onDrop={(e) => onDrop(e, practice)}
            onDragOver={(e) => e.preventDefault()} // Allow drop by preventing default behavior
            style={{ margin: '10px', padding: '5px', border: '1px dashed #000', minHeight: '30px' }}
          >
            {practice}
          </div>
        ))}
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

export default Ch2Game;

