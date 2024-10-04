import React, { useState } from "react";
import "./SortingGame.scss";

const initialTechItems = [
    { id: 1, name: "Smart Speaker", isAI: true, img: "/images/smart-speaker.png" },
    { id: 2, name: "Calculator", isAI: false, img: "/images/calculator.png" },
    { id: 3, name: "Self-Driving Car", isAI: true, img: "/images/self-driving-car.png" },
    { id: 4, name: "Microwave", isAI: false, img: "/images/microwave.png" },
    { id: 5, name: "Chatbot", isAI: true, img: "/images/chatbot.png" },
  ];
  

const SortingGame = () => {
  const [items, setItems] = useState(initialTechItems);
  const [aiItems, setAiItems] = useState([]);
  const [nonAiItems, setNonAiItems] = useState([]);

  const onDragStart = (e, id, source) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("source", source);
  };

  const onDrop = (e, target) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const source = e.dataTransfer.getData("source");
    
    let item;
    let sourceArray;
    let setSourceArray;

    if (source === "items") {
      sourceArray = items;
      setSourceArray = setItems;
    } else if (source === "AI") {
      sourceArray = aiItems;
      setSourceArray = setAiItems;
    } else {
      sourceArray = nonAiItems;
      setSourceArray = setNonAiItems;
    }

    item = sourceArray.find(item => item.id.toString() === id);
    
    if (item) {
      setSourceArray(sourceArray.filter(i => i.id.toString() !== id));
      
      if (target === "items") {
        setItems([...items, item]);
      } else if (target === "AI") {
        setAiItems([...aiItems, item]);
      } else {
        setNonAiItems([...nonAiItems, item]);
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const renderItems = (itemList, source) => {
    return itemList.map((item) => (
      <div
        key={item.id}
        className="tech-item"
        draggable
        onDragStart={(e) => onDragStart(e, item.id, source)}
      >
        <img src={item.img} alt={item.name} />
      </div>
    ));
  };

  const correctAnswers = aiItems.filter(item => item.isAI).length + 
                         nonAiItems.filter(item => !item.isAI).length;

  return (
    <div className="sorting-game">
      <h2>Sort the Technologies</h2>
      <p>Drag each item into the correct category: AI or Non-AI. You can move items between categories or back to the original list.</p>

      <div className="game-area">
        <div 
          className="items"
          onDrop={(e) => onDrop(e, "items")}
          onDragOver={onDragOver}
        >
          <h3>Technologies to Sort</h3>
          {renderItems(items, "items")}
        </div>

        <div className="categories">
          <div 
            className="ai-category"
            onDrop={(e) => onDrop(e, "AI")}
            onDragOver={onDragOver}
          >
            <h3>AI</h3>
            <p>Drop AI technologies here</p>
            {renderItems(aiItems, "AI")}
          </div>

          <div 
            className="non-ai-category"
            onDrop={(e) => onDrop(e, "Non-AI")}
            onDragOver={onDragOver}
          >
            <h3>Non-AI</h3>
            <p>Drop non-AI technologies here</p>
            {renderItems(nonAiItems, "Non-AI")}
          </div>
        </div>
      </div>

      <p className="correct-answers">Correct Answers: {correctAnswers} out of {initialTechItems.length}</p>
    </div>
  );
};

export default SortingGame;
