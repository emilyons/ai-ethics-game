// PasswordRules.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './PasswordRules.scss';

const passwordExamples = [
  { example: 'password123', reason: 'Too simple and easy to guess.', followsRules: false },
  { example: 'Str0ngP@ssw0rd!', reason: 'Great mix of letters, numbers, and symbols.', followsRules: true },
  { example: 'qwerty', reason: 'Common and easy to guess.', followsRules: false },
  { example: '🐉DragonKnight42!', reason: 'Strong, memorable, and uses symbols!', followsRules: true },
];

const mentorDialog = [
  "Greetings, Guardian-in-training! As you prepare to defend the digital realm, you need to learn the art of crafting strong passwords.",
  "Passwords like 'admin' or '123456' might seem clever, but hackers have seen them all before. They’re too easy to crack!",
  "And yes, really long phrases can be strong, but let’s master these basics first to become a true Guardian!",
];

const PasswordRules = () => {
  const [feedback, setFeedback] = useState({});
  const [dialogIndex, setDialogIndex] = useState(0);

  const handleEvaluatePassword = (index) => {
    const example = passwordExamples[index];
    setFeedback({
      index,
      message: example.followsRules
        ? `✅ Great! "${example.example}" is strong!`
        : `❌ Oops! "${example.example}" is weak. Reason: ${example.reason}`,
      isStrong: example.followsRules,
    });
  };

  const nextDialog = () => {
    setDialogIndex((prevIndex) => (prevIndex + 1) % mentorDialog.length);
  };

  return (
    <div className="password-rules">
      {/* Mentor Dialog Section */}
      <div className="mentor-dialog">
        <p>{mentorDialog[dialogIndex]}</p>
        <button onClick={nextDialog}>Next</button>
      </div>

      <h2>What Makes a Password Strong?</h2>
      <p>To become a Guardian, make sure your passwords follow these rules:</p>
      <ul className="rules-list">
        <li>✅ Use 8 or more characters</li>
        <li>🔢 Mix letters, numbers, and symbols</li>
        <li>❌ Avoid using personal information</li>
        <li>🔐 Use different passwords for different accounts</li>
      </ul>

      <h3>Interactive Password Examples</h3>
      <div className="password-examples">
        {passwordExamples.map((example, index) => (
          <div
            key={index}
            className={`password-card ${
              feedback.index === index ? (feedback.isStrong ? 'strong' : 'weak') : ''
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

      <Link to="/chapter2/password-hacking">
        <button className="cta-button">Simulate Password Hacking</button>
      </Link>
    </div>
  );
};

export default PasswordRules;
