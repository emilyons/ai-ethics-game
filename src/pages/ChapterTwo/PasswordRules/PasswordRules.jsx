import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaKey, FaTimesCircle, FaLock } from "react-icons/fa";
import MentorDialog from "../../../components/MentorDialog/MentorDialog";
import "./PasswordRules.scss";

const passwordExamples = [
  {
    example: "password123",
    reason: "Too simple and easy to guess.",
    followsRules: false,
  },
  {
    example: "Str0ngP@ssw0rd!",
    reason: "Great mix of letters, numbers, and symbols.",
    followsRules: true,
  },
  {
    example: "qwerty",
    reason: "Common and easy to guess.",
    followsRules: false,
  },
  {
    example: "🐉DragonKnight42!",
    reason: "Strong, memorable, and uses symbols!",
    followsRules: true,
  },
];

const PasswordRules = () => {
  const [feedback, setFeedback] = useState({});
  const [mentorCompleted, setMentorCompleted] = useState(false);
  const [evaluations, setEvaluations] = useState(
    new Array(passwordExamples.length).fill(false)
  );

  const handleEvaluatePassword = (index) => {
    const example = passwordExamples[index];
    const newEvaluations = [...evaluations];
    newEvaluations[index] = true; // Mark this password as evaluated
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
      {/* Render Mentor Dialog */}
      <MentorDialog onComplete={() => setMentorCompleted(true)} />

      <h2>What Makes a Password Strong?</h2>
      <p>To become a Guardian, make sure your passwords follow these rules:</p>

      <ul className="rules-list">
        <li>
          <FaCheckCircle style={{ color: "green" }} />
          <span>Use 8 or more characters</span>
        </li>
        <li>
          <FaKey style={{ color: "blue" }} />
          <span>Mix letters, numbers, and symbols</span>
        </li>
        <li>
          <FaTimesCircle style={{ color: "red" }} />
          <span>Avoid using personal information</span>
        </li>
        <li>
          <FaLock style={{ color: "goldenrod" }} />
          <span>Use different passwords for different accounts</span>
        </li>
      </ul>

      <h3>Interactive Password Examples</h3>
      <div className="password-examples">
        {passwordExamples.map((example, index) => (
          <div
            key={index}
            className={`password-card ${
              feedback.index === index
                ? feedback.isStrong
                  ? "strong"
                  : "weak"
                : ""
            }`}
          >
            <p>
              <strong>Password:</strong> <code>{example.example}</code>
            </p>
            <button onClick={() => handleEvaluatePassword(index)}>
              Evaluate Password
            </button>
            {feedback.index === index && (
              <div className="feedback">
                {feedback.isStrong ? <FaCheckCircle /> : <FaTimesCircle />}
                <span>{feedback.message}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {mentorCompleted && allPasswordsEvaluated && (
        <Link to="/chapter2/password-hacking">
          <button className="cta-button">Simulate Password Hacking</button>
        </Link>
      )}
    </div>
  );
};

export default PasswordRules;
