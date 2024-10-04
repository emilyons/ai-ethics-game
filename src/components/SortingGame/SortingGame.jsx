import React, { useState } from "react";
import "./SortingGame.scss";

// Example technologies
const techItems = [
  { id: 1, name: "Smart Speaker", isAI: true },
  { id: 2, name: "Calculator", isAI: false },
  { id: 3, name: "Self-Driving Car", isAI: true },
  { id: 4, name: "Microwave", isAI: false },
  { id: 5, name: "Chatbot", isAI: true },
];

const SortingGame = () => {
  const [items, setItems] = useState(techItems);
  const [aiItems, setAiItems] = useState([]);
  const [nonAiItems, setNonAiItems] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDrop = (e, category) => {
    let id = e.dataTransfer.getData("id");
    let item = items.find(item => item.id.toString() === id);
    
    if (item) {
      if ((category === "AI" && item.isAI) || (category === "Non-AI" && !item.isAI)) {
        setCorrectAnswers(prev => prev + 1);
      }
      
      setItems(items.filter(item => item.id.toString() !== id));
      category === "AI" ? setAiItems([...aiItems, item]) : setNonAiItems([...nonAiItems, item]);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sorting-game">
      <h2>Sort the Technologies</h2>
      <p>Drag each item into the correct category: AI or Non-AI.</p>

      <div className="game-area">
        <div className="items">
          {items.map((item) => (
            <div
              key={item.id}
              className="tech-item"
              draggable
              onDragStart={(e) => onDragStart(e, item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="categories">
          <div 
            className="ai-category"
            onDrop={(e) => onDrop(e, "AI")}
            onDragOver={onDragOver}
          >
            <h3>AI</h3>
            <p>Drop AI technologies here</p>
            {aiItems.map(item => <div key={item.id} className="tech-item">{item.name}</div>)}
          </div>

          <div 
            className="non-ai-category"
            onDrop={(e) => onDrop(e, "Non-AI")}
            onDragOver={onDragOver}
          >
            <h3>Non-AI</h3>
            <p>Drop non-AI technologies here</p>
            {nonAiItems.map(item => <div key={item.id} className="tech-item">{item.name}</div>)}
          </div>
        </div>
      </div>

      <p>Correct Answers: {correctAnswers}</p>
    </div>
  );
};

export default SortingGame;
