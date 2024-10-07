import React, { useState, useEffect } from "react";
import "./MachineLearning.scss";
import { Link } from "react-router-dom";

// Page 4: Machine Learning Basics
// Objective: Introduce machine learning in a simple way—how AI learns from data.

// Dialogue:

// Narrator: “AI gets smarter by learning from data—this is called machine learning. The more data it has, the better it gets at recognizing patterns.”
// Visuals: A conveyor belt of data points entering an AI machine, showing it "learning" and improving accuracy.
// Action:
// Players feed data points into a virtual AI machine, watching how it improves after each batch.

const MachineLearning = () => {
  const [dataPoints, setDataPoints] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const addDataPoints = () => {
    setDataPoints(prevPoints => Math.min(prevPoints + 10, 100));
  };

  useEffect(() => {
    setAccuracy(Math.floor((dataPoints / 100) * 90 + Math.random() * 10));
  }, [dataPoints]);

  return (
    <div className="machine-learning">
      <h1>Machine Learning Basics</h1>
      <p>
        AI gets smarter by learning from data—this is called machine learning. 
        The more data it has, the better it gets at recognizing patterns.
      </p>

      <div className="conveyor-belt">
        <div className="data-points" style={{ width: `${dataPoints}%` }}></div>
        <div className="ai-machine"></div>
      </div>

      <div className="controls">
        <button onClick={addDataPoints} disabled={dataPoints >= 100}>
          Feed Data Points
        </button>
        <p>Data Points: {dataPoints}</p>
        <p>AI Accuracy: {accuracy}%</p>
      </div>

      <div className="explanation">
        <p>
          As you feed more data points into the AI machine, watch how its accuracy improves. 
          This demonstrates how machine learning algorithms become more effective with more data.
        </p>
      </div>

      <div className="affirmation">
        <p>"I can see how machines learn and grow with data, just like I do with practice!"</p>
      </div>

      <Link to="/chapter1/sorting-game" className="next-lesson-btn">
        Next: AI Sorting Game
      </Link>
    </div>
  );
};

export default MachineLearning;