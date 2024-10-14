import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaKey, FaTimesCircle, FaLock } from "react-icons/fa";
import MentorDialog from "../../../components/MentorDialog/MentorDialog";
import "./PasswordRules.scss";

const passwordExamples = [
  { example: "password123", reason: "Too simple and easy to guess.", followsRules: false },
  { example: "Str0ngP@ssw0rd!", reason: "Great mix of letters, numbers, and symbols.", followsRules: true },
  { example: "qwerty", reason: "Common and easy to guess.", followsRules: false },
  { example: "🐉DragonKnight42!", reason: "Strong, memorable, and uses symbols!", followsRules: true },
];

const PasswordRules = () => {
  const [feedback, setFeedback] = useState({});
  const [mentorCompleted, setMentorCompleted] = useState(false);
  const [evaluations, setEvaluations] = useState(new Array(passwordExamples.length).fill(false));

  const handleEvaluatePassword = (index) => {
    const example = passwordExamples[index];
    const newEvaluations = [...evaluations];
    newEvaluations[index] = true;
    setEvaluations(newEvaluations);

    setFeedback({
      index,
      message: example.followsRules
        ? `✅ Great! "${example.example}" is strong!`
        : `❌ Oops! "${example.example}" is weak. Reason: ${example.reason}`,
      isStrong: example.followsRules,
    });
  };

  const allPasswordsEvaluated = evaluations.every((evaluated) => evaluated);

  return (
    <div className="password-rules">
      <MentorDialog onComplete={() => setMentorCompleted(true)} />

      <h2>What Makes a Password Strong?</h2>
      <p>To become a Guardian, make sure your passwords follow these rules:</p>

      <ul className="rules-list">
        <li><FaCheckCircle style={{ color: "green" }} /> Use 8 or more characters</li>
        <li><FaKey style={{ color: "blue" }} /> Mix letters, numbers, and symbols</li>
        <li><FaTimesCircle style={{ color: "red" }} /> Avoid using personal information</li>
        <li><FaLock style={{ color: "goldenrod" }} /> Use different passwords for different accounts</li>
      </ul>

      <h3>Let's See This in Action!</h3>
      <div className="password-examples">
        {passwordExamples.map((example, index) => (
          <div key={index} className={`password-card ${evaluations[index] ? "evaluated" : ""}`}>
            <p><strong>Password:</strong> <code>{example.example}</code></p>
            {!evaluations[index] && (
              <button onClick={() => handleEvaluatePassword(index)}>
                Evaluate Password
              </button>
            )}
            {feedback.index === index && (
              <div className="feedback">
                {feedback.isStrong ? <FaCheckCircle /> : <FaTimesCircle />}
                <span>{feedback.message}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="progress-tracker">
        <div className={`progress-item ${mentorCompleted ? "completed" : ""}`}>
          <FaCheckCircle /> Mentor Dialog Completed
        </div>
        <div className={`progress-item ${allPasswordsEvaluated ? "completed" : ""}`}>
          <FaCheckCircle /> All Passwords Evaluated
        </div>

        {mentorCompleted && allPasswordsEvaluated ? (
          <Link to="/chapter2/password-hacking">
            <button className="cta-button">Simulate Password Hacking</button>
          </Link>
        ) : (
          <p className="incomplete-message">Complete all tasks to unlock the next section!</p>
        )}
      </div>
    </div>
  );
};

export default PasswordRules;