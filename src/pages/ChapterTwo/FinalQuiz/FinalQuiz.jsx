// FinalQuiz.jsx (Page 10: Final Mission and Quiz)
// Purpose: Summarize lessons learned and ensure retention.
// Content:
// Quiz: Series of questions on data protection (e.g., phishing, encryption, password rules).
// Feedback: Players receive a Data Privacy Guardian Certificate upon completing the quiz.

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./FinalQuiz.scss";

const FinalQuiz = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className="final-quiz">
      <h2>Final Quiz: Data Privacy Guardian</h2>
      <p>Answer the questions to complete your training as a Data Privacy Guardian!</p>
      <div>
        <button onClick={() => handleAnswer(true)}>Question 1: Correct Answer</button>
        <button onClick={() => handleAnswer(false)}>Question 1: Wrong Answer</button>
      </div>
      <p>Score: {score}</p>
      {score >= 3 && <p>Congratulations, Guardian! You've completed the mission!</p>}
    </div>
  );
};

export default FinalQuiz;
