import React, { useState } from "react";
import "./PatternRecognition.scss";
import { Link } from "react-router-dom";

// Page 7: Pattern Recognition
// Objective: Explain how AI uses patterns in data to make decisions.

// Dialogue:

// Narrator: “Once AI spots patterns, it can make decisions based on those. For example, it can recognize your face or predict weather trends.”
// Visuals: Demonstrations of pattern recognition, like facial recognition or analyzing weather data.
// Action:
// Players guide an AI system to recognize patterns in sets of data, such as identifying faces in a crowd or trends in shopping data.

const PatternRecognition = () => {
  const [selectedPattern, setSelectedPattern] = useState(null);

  const patterns = [
    { name: "Facial Recognition", description: "AI can identify and verify a person's identity using their facial features." },
    { name: "Weather Prediction", description: "AI analyzes historical weather data to predict future weather patterns." },
    { name: "Shopping Trends", description: "AI recognizes patterns in customer behavior to predict shopping trends." }
  ];

  const handlePatternClick = (pattern) => {
    setSelectedPattern(pattern);
  };

  return (
    <div className="pattern-recognition">
      <h1>Pattern Recognition</h1>
      <p>
        Once AI spots patterns, it can make decisions based on those. For example, 
        it can recognize your face or predict weather trends.
      </p>

      <div className="pattern-examples">
        {patterns.map((pattern, index) => (
          <div key={index} className="pattern" onClick={() => handlePatternClick(pattern)}>
            <h2>{pattern.name}</h2>
            <p>Click to learn more</p>
          </div>
        ))}
      </div>

      {selectedPattern && (
        <div className="pattern-details">
          <h2>{selectedPattern.name}</h2>
          <p>{selectedPattern.description}</p>
        </div>
      )}

      <div className="affirmation">
        <p>"I can see the patterns that help machines learn and grow."</p>
      </div>

      <Link to="/chapter1/mission-complete" className="next-lesson-btn">
        Next: Mission Complete
      </Link>
    </div>
  );
};

export default PatternRecognition;