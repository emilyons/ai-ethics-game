// PhishingGame.jsx (Page 9: Recognizing Phishing)
// Purpose: Teach how to spot phishing attempts.
// Content:
// Spot-the-difference game: Compare legitimate and phishing emails.
// Point out phishing red flags (e.g., suspicious links, poor grammar).
// PhishingGame.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PhishingGame.scss";

const emailSamples = [
  {
    id: 1,
    subject: "Update Your Account Info",
    body: "Dear User, please update your bank details by clicking this link: [suspicious-link.com]",
    isPhishing: true,
    feedback:
      "This email is phishing because it asks for sensitive information and uses a suspicious link.",
  },
  {
    id: 2,
    subject: "Welcome to Your New Subscription!",
    body: "Hi! Your Netflix subscription is confirmed. No further action is required.",
    isPhishing: false,
    feedback:
      "This email is legitimate—it’s only providing confirmation and doesn’t ask for personal details.",
  },
  {
    id: 3,
    subject: "Win a Free Vacation!",
    body: "Congratulations! Click here to claim your free trip: [vacation-deals.ru]",
    isPhishing: true,
    feedback:
      "This is phishing. Be cautious of messages promising prizes or asking for immediate action.",
  },
];

const PhishingGame = () => {
  const [score, setScore] = useState(0);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [finalScore, setFinalScore] = useState(null);

  const handleChoice = (choice) => {
    const currentEmail = emailSamples[currentEmailIndex];

    if (choice === currentEmail.isPhishing) {
      setScore((prevScore) => prevScore + 1);
      setFeedback(`Correct! ${currentEmail.feedback}`);
    } else {
      setFeedback(`Oops! ${currentEmail.feedback}`);
    }

    // Move to the next email after a brief delay
    setTimeout(() => {
      const nextIndex = currentEmailIndex + 1;
      if (nextIndex < emailSamples.length) {
        setCurrentEmailIndex(nextIndex);
        setFeedback(""); // Clear feedback
      } else {
        setFinalScore(score + (choice === currentEmail.isPhishing ? 1 : 0)); // Fix final score calculation
      }
    }, 1500);
  };

  if (showIntro) {
    return (
      <div className="phishing-game intro-dialog">
        <h2>Welcome to Phishing Detective!</h2>
        <p>
          Phishing is when someone tries to trick you into sharing personal
          information, like passwords or bank details. These emails can look
          real, but there are always clues to spot them!
        </p>
        <p>Click "Start Game" to begin your training!</p>
        <button onClick={() => setShowIntro(false)}>Start Game</button>
      </div>
    );
  }

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

      <p className="feedback">{feedback}</p>

      <p className="score">Score: {finalScore !== null ? finalScore : score}</p>

      {finalScore !== null && (
        <Link to="/chapter2/final-quiz">
          <button>Proceed to Final Quiz</button>
        </Link>
      )}
    </div>
  );
};

export default PhishingGame;
