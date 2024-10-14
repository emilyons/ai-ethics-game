// PhishingGame.jsx (Page 9: Recognizing Phishing)
// Purpose: Teach how to spot phishing attempts.
// Content:
// Spot-the-difference game: Compare legitimate and phishing emails.
// Point out phishing red flags (e.g., suspicious links, poor grammar).


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PhishingGame.scss";

const emailSamples = [
  {
    id: 1,
    subject: "Update Your Account Info",
    body: "Dear User, please update your bank details by clicking this link: [suspicious-link.com]",
    isPhishing: true,
  },
  {
    id: 2,
    subject: "Welcome to Your New Subscription!",
    body: "Hi! Your Netflix subscription is confirmed. No further action is required.",
    isPhishing: false,
  },
  {
    id: 3,
    subject: "Win a Free Vacation!",
    body: "Congratulations! Click here to claim your free trip: [vacation-deals.ru]",
    isPhishing: true,
  },
];

const PhishingGame = () => {
  const [score, setScore] = useState(0);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleChoice = (choice) => {
    const currentEmail = emailSamples[currentEmailIndex];

    if (choice === currentEmail.isPhishing) {
      setScore(score + 1);
      setFeedback("Correct! This email is " + (choice ? "phishing." : "legitimate."));
    } else {
      setFeedback("Oops! That was " + (choice ? "legitimate." : "a phishing attempt."));
    }

    // Move to the next email or reset if finished
    const nextIndex = currentEmailIndex + 1;
    if (nextIndex < emailSamples.length) {
      setCurrentEmailIndex(nextIndex);
    } else {
      setFeedback("Game Over! Your final score: " + score);
    }
  };

  return (
    <div className="phishing-game">
      <h2>Phishing Detective</h2>
      <p>Can you spot the phishing attempt? Check the email details below.</p>

      {currentEmailIndex < emailSamples.length && (
        <div className="email-container">
          <h3>Subject: {emailSamples[currentEmailIndex].subject}</h3>
          <p>{emailSamples[currentEmailIndex].body}</p>
          <div className="button-group">
            <button onClick={() => handleChoice(true)}>Phishing</button>
            <button onClick={() => handleChoice(false)}>Not Phishing</button>
          </div>
        </div>
      )}

      <p>{feedback}</p>
      <p>Score: {score}</p>

      {currentEmailIndex >= emailSamples.length && (
        <Link to="/chapter2/final-quiz">
          <button>Proceed to Final Quiz</button>
        </Link>
      )}
    </div>
  );
};

export default PhishingGame;
