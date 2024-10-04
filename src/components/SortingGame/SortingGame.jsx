import React, { useState, useEffect } from "react";
import "./SortingGame.scss";

const SortingGame = () => {
  const [items, setItems] = useState([]);
  const [aiItems, setAiItems] = useState([]);
  const [nonAiItems, setNonAiItems] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [initialTechItems, setInitialTechItems] = useState([]);

  useEffect(() => {
    // Initialize your items here
    const techItems = [
      {
        id: 1,
        name: "Smart Speaker",
        image: "src/assets/images/smart-speaker-3.jpeg",
        isAI: true,
      },
      {
        id: 2,
        name: "Calculator",
        image: "src/assets/images/calculator.svg",
        isAI: false,
      },
      {
        id: 3,
        name: "Microwave",
        image: "src/assets/images/microwave_PNG15726.png",
        isAI: false,
      },
      {
        id: 4,
        name: "Chatbot",
        image: "src/assets/images/graident-ai-robot-vectorart_78370-4114.avif",
        isAI: true,
      },
      {
        id: 5,
        name: "Self-driving Car",
        image: "src/assets/images/self-driving-car.svg",
        isAI: true,
      },
      // Add more items as needed
    ];
    setItems(techItems);
    setInitialTechItems(techItems);
  }, []);

  const onDragStart = (e, id, source) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("source", source);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, target) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const source = e.dataTransfer.getData("source");

    let sourceArray, setSourceArray;
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

    let item = sourceArray.find((item) => item.id.toString() === id);

    if (item) {
      setSourceArray(sourceArray.filter((i) => i.id.toString() !== id));

      if (target === "items") {
        setItems([...items, item]);
        setFeedbackMessage(""); // Clear feedback when moving back to items
      } else if (target === "AI") {
        setAiItems([...aiItems, item]);
        if (item.isAI) {
          setFeedbackMessage(`Correct! ${item.name} is AI.`);
        } else {
          setFeedbackMessage(`Oops! ${item.name} is not AI.`);
        }
      } else {
        setNonAiItems([...nonAiItems, item]);
        if (!item.isAI) {
          setFeedbackMessage(`Correct! ${item.name} is Non-AI.`);
        } else {
          setFeedbackMessage(`Oops! ${item.name} is actually AI.`);
        }
      }
    }
  };

  const renderItems = (itemList, source) => {
    return itemList.map((item) => (
      <div
        key={item.id}
        className="tech-item"
        draggable
        onDragStart={(e) => onDragStart(e, item.id, source)}
      >
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ));
  };

  const CorrectAnswers =
    aiItems.filter((item) => item.isAI).length +
    nonAiItems.filter((item) => !item.isAI).length;

  return (
    <div className="sorting-game">
      <h2>Sort the Technologies</h2>
      <p>
        Drag each item into the correct category: AI or Non-AI. You can move
        items between categories or back to the original list.
      </p>

      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}

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

      <p className="correct-answers">
        Correct Answers: {CorrectAnswers} out of {initialTechItems.length}
      </p>
      
      {CorrectAnswers === initialTechItems.length && (
  <button onClick={() => window.location.href = "/chapter2"}>
    Proceed to Next Lesson
  </button>
)}


    </div>
  );
};

export default SortingGame;
