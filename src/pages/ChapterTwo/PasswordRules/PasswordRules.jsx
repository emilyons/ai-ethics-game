import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaKey, FaTimesCircle, FaLock, FaShieldAlt, FaRobot } from "react-icons/fa";
import MentorDialog from "../../../components/ProfessorAion/ProfessorAion";
import "./PasswordRules.scss";
import { motion } from 'framer-motion';


const passwordRules = [
  { icon: <FaShieldAlt style={{ color: "$secondary5", fontSize: "2rem" }} />, text: "Use 8 or more characters" },
  { icon: <FaRobot style={{ color: "$primary2", fontSize: "2rem" }} />, text: "Mix letters, numbers, and symbols" },
  { icon: <FaTimesCircle style={{ color: "$secondary6", fontSize: "2rem" }} />, text: "Avoid using personal information" },
  { icon: <FaLock style={{ color: "$secondary3", fontSize: "2rem" }} />, text: "Use different passwords for different accounts" },
];

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
        : `❌ Oops! "${example.example}" is weak. Here's why: ${example.reason}`,
      isStrong: example.followsRules,
    });
  };

  const allPasswordsEvaluated = evaluations.every((evaluated) => evaluated);

  return (
    <div className="password-rules">
      <MentorDialog onComplete={() => setMentorCompleted(true)} />

      <h2>What Makes a Password Strong?</h2>
      <p>Guardians are required to have strong passwords. Make sure your passwords follow these rules:</p>

      <ul className="rules-list">
        {passwordRules.map((rule, index) => (
          <li key={index} className="rule-panel">
            {rule.icon} {rule.text}
          </li>
        ))}
      </ul>

      <h3>Let's See This in Action!</h3>
      <div className="password-examples">
        {passwordExamples.map((example, index) => (
          <motion.div 
            key={index} 
            className={`password-card ${evaluations[index] ? "evaluated" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p><strong>Password:</strong> <code>{example.example}</code></p>
            {!evaluations[index] ? (
              <button 
                onClick={() => handleEvaluatePassword(index)}
                className="evaluate-button"
              >
                Evaluate Password
              </button>
            ) : (
              <div className="feedback subdued">
                {example.followsRules ? <FaCheckCircle /> : <FaTimesCircle />}
                <span>{example.followsRules 
                  ? `Great! "${example.example}" is strong!`
                  : `Oops! "${example.example}" is weak. Here's why: ${example.reason}`}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="progress-tracker">
        <div className={`progress-item ${mentorCompleted ? "completed" : ""}`}>
          {mentorCompleted ? <FaCheckCircle /> : null} Learn from Sage
        </div>
        <div className={`progress-item ${allPasswordsEvaluated ? "completed" : ""}`}>
          {allPasswordsEvaluated ? (
            <>
              <FaCheckCircle /> All Passwords Evaluated
            </>
          ) : (
            "Evaluate Passwords"
          )}
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
