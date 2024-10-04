import React, { useState } from "react";

// Example technologies
const techItems = [
  { id: 1, name: "Smart Speaker", isAI: true },
  { id: 2, name: "Calculator", isAI: false },
  { id: 3, name: "Self-Driving Car", isAI: true },
  { id: 4, name: "Microwave", isAI: false },
  { id: 5, name: "Chatbot", isAI: true },
];

const SortingGame = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleSort = (item, isAI) => {
    if (item.isAI === isAI) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (
    <div className="sorting-game">
      <h2>Sort the Technologies</h2>
      <p>Drag each item into the correct category: AI or Non-AI.</p>

      <div className="game-area">
        <div className="items">
          {techItems.map((item) => (
            <div
              key={item.id}
              className="tech-item"
              onClick={() => handleSort(item, true)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="categories">
          <div className="ai-category">
            <h3>AI</h3>
            <p>Drop AI technologies here</p>
          </div>

          <div className="non-ai-category">
            <h3>Non-AI</h3>
            <p>Drop non-AI technologies here</p>
          </div>
        </div>
      </div>

      <p>Correct Answers: {correctAnswers}</p>
    </div>
  );
};

export default SortingGame;
