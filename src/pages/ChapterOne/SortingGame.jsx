import React, { useState } from "react";
import "./SortingGame.scss";
import { Link } from "react-router-dom";

// Page 5: AI Sorting Game
// Objective: Reinforce AI recognition through a sorting activity.

// Dialogue:

// Narrator: “Can you identify which technologies are AI? Drag the items to the right category.”
// Visuals: Items like calculators, robots, and smart home devices appear.
// Action:
// Players drag and drop items into AI or non-AI categories, earning feedback as they sort.

const SortingGame = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Calculator", isAI: false },
    { id: 2, name: "Smart Speaker", isAI: true },
    { id: 3, name: "Robot Vacuum", isAI: true },
    { id: 4, name: "Traditional Thermostat", isAI: false },
    { id: 5, name: "Self-Driving Car", isAI: true },
    { id: 6, name: "Microwave", isAI: false },
  ]);

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleDrag = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e, isAICategory) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("text"));
    const item = items.find(item => item.id === id);

    if (item.isAI === isAICategory) {
      setScore(score + 1);
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Oops! Try again.");
    }

    setItems(items.filter(item => item.id !== id));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sorting-game">
      <h1>AI Sorting Game</h1>
      <p>Can you identify which technologies are AI? Drag the items to the right category.</p>

      <div className="game-area">
        <div className="items-to-sort">
          {items.map(item => (
            <div 
              key={item.id} 
              draggable 
              onDragStart={(e) => handleDrag(e, item.id)}
              className="item"
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="categories">
          <div 
            className="category ai"
            onDrop={(e) => handleDrop(e, true)}
            onDragOver={allowDrop}
          >
            AI Technologies
          </div>
          <div 
            className="category non-ai"
            onDrop={(e) => handleDrop(e, false)}
            onDragOver={allowDrop}
          >
            Non-AI Technologies
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>{feedback}</p>
        <p>Score: {score}</p>
      </div>

      <div className="affirmation">
        <p>"I can identify AI technologies in the world around me!"</p>
      </div>

      {items.length === 0 && (
        <Link to="/chapter1/data-training" className="next-lesson-btn">
          Next: Data Training
        </Link>
      )}
    </div>
  );
};

export default SortingGame;
