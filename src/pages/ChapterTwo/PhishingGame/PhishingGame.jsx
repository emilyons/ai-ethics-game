// PhishingGame.jsx (Page 9: Recognizing Phishing)
// Purpose: Teach how to spot phishing attempts.
// Content:
// Spot-the-difference game: Compare legitimate and phishing emails.
// Point out phishing red flags (e.g., suspicious links, poor grammar).

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PhishingGame.scss";
const PhishingGame = () => {
  const [score, setScore] = useState(0);

  const handlePhishing = (isPhishing) => {
    if (isPhishing) {
      setScore(score + 1);
    }
  };

  return (
    <div className="phishing-game">
      <h2>Phishing Detective</h2>
      <p>Can you spot the phishing attempt? Compare the two emails below.</p>
      <div>
        <button onClick={() => handlePhishing(true)}>Spot Phishing</button>
        <button onClick={() => handlePhishing(false)}>Not Phishing</button>
      </div>
      <p>Score: {score}</p>
      {score >= 1 && (
        <Link to="/chapter2/final-quiz">
          <button>Proceed to Final Quiz</button>
        </Link>
      )}
    </div>
  );
};

export default PhishingGame;
