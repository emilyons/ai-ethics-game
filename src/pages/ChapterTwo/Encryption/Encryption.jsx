// Encryption.jsx (Page 8: Encryption)
// Purpose: Introduce encryption as a tool for protecting data.
// Content:
// Explain encryption in simple terms: how it scrambles data.
// Activity: Solve a simple encryption puzzle by decoding a message using a cipher.

import React from "react";
import "./Encryption.scss";

const Encryption = () => {
  const [isSolved, setIsSolved] = useState(false);

  const handleSolve = () => {
    setIsSolved(true);
  };
  return (
    <div className="encryption">
      <h2>Encryption - Protecting Data</h2>
      <p>
        Encryption scrambles data to keep it safe from hackers. Solve the puzzle
        below to decrypt a message!
      </p>
      <button onClick={handleSolve}>Solve Encryption Puzzle</button>
      {isSolved && <p>Well done! You decrypted the data!</p>}
      {isSolved && (
        <Link to="/chapter2/phishing-game">
          <button>Proceed to Phishing Game</button>
        </Link>
      )}
    </div>
  );
};

export default Encryption;
