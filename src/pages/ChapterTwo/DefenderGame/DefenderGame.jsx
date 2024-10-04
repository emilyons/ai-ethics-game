import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DefenderGame.scss";

const DefenderGame = () => {
  const [score, setScore] = useState(0);

  const handleStrongPassword = () => {
    setScore(score + 1);
  };
  return (
    <div className="defender-game">
      <h2>Defend Techville’s Data!</h2>
      <p>
        Create strong passwords to stop hackers from breaking into the vaults.
      </p>
      <button onClick={handleStrongPassword}>Create Strong Password</button>
      <p>Score: {score}</p>
      {score >= 3 && (
        <Link to="/chapter2/encryption">
          <button>Proceed to Encryption</button>
        </Link>
      )}
    </div>
  );
};

export default DefenderGame;

// DefenderGame.jsx (Page 7: Password Defender Game)
// Purpose: Players defend Techville’s data by building strong passwords.
// Content:
// Game Mechanics: Players race against time to create strong passwords before hackers can break into the vault.
// Feedback: Immediate visual feedback for each password.
// Visual Aid: Interactive game interface with a vault and hacking attempts.
// Activity: Players can play the game multiple times to practice creating strong passwords.

{
  /* <h2>Password Defender Game</h2>
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
      </Link> */
}
