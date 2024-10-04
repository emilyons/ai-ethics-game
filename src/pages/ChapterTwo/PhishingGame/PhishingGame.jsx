// PhishingGame.jsx (Page 9: Recognizing Phishing)
// Purpose: Teach how to spot phishing attempts.
// Content:
// Spot-the-difference game: Compare legitimate and phishing emails.
// Point out phishing red flags (e.g., suspicious links, poor grammar).

import React from 'react';
import './PhishingGame.scss';

const PhishingGame = () => {
  return (
    <div className="phishing-game">
      <h2>Phishing Game</h2>
      <p>Help Techville’s data stay safe by building strong passwords!</p>
      <div className="game-interface">
        <div className="vault">
          <div className="lock"></div>
        </div>
        <div className="hacking-attempts">
          <p>Hacking Attempts: 0</p>
        </div>
      </div>
      <p>Now, let’s try hacking some passwords!</p>
      <Link to="/chapter2/hacking-practice">
        <button>Try Hacking Passwords</button>
      </Link>
    </div>
  );
};

export default PhishingGame;
    