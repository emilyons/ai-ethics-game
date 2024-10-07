import React, { useState, useEffect } from "react";
import "./DataTraining.scss";
import { Link } from "react-router-dom";

const DataTraining = () => {
  const [dataAmount, setDataAmount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [prediction, setPrediction] = useState("");

  const movies = [
    "Action Movie", "Romantic Comedy", "Sci-Fi Thriller", 
    "Historical Drama", "Animated Adventure"
  ];

  useEffect(() => {
    setAccuracy(Math.min(dataAmount * 2, 100));
    if (dataAmount >= 50) {
      setPrediction(movies[Math.floor(Math.random() * movies.length)]);
    } else {
      setPrediction("");
    }
  }, [dataAmount]);

  const handleSliderChange = (e) => {
    setDataAmount(parseInt(e.target.value));
  };

  return (
    <div className="data-training">
      <h1>Data Training</h1>
      <p>
        To help AI learn, it needs lots of data. The more data it gets, 
        the better it becomes at predicting things, like what movie you'll enjoy next!
      </p>

      <div className="ai-simulation">
        <h2>AI Movie Recommendation Simulator</h2>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={dataAmount} 
          onChange={handleSliderChange}
        />
        <p>Data Amount: {dataAmount}%</p>
        <p>Prediction Accuracy: {accuracy}%</p>
        {prediction && <p>Recommended Movie: {prediction}</p>}
      </div>

      <div className="explanation">
        <p>
          As you increase the amount of data, notice how the AI's prediction accuracy improves. 
          With more data about your movie preferences, the AI can make better recommendations!
        </p>
      </div>

      <div className="affirmation">
        <p>"I understand that AI needs data to learn and make better predictions!"</p>
      </div>

      <Link to="/chapter1/pattern-recognition" className="next-lesson-btn">
        Next: Pattern Recognition
      </Link>
    </div>
  );
};

export default DataTraining;
