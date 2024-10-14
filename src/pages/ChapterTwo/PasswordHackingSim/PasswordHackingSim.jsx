// PasswordHackingSim.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PasswordHackingSim.scss';

const commonPasswords = ['123456', 'password', 'admin', 'qwerty', 'password123'];

const PasswordHackingSim = () => {
  const [playerPassword, setPlayerPassword] = useState('');
  const [crackingResult, setCrackingResult] = useState('');
  const [isVaultLocked, setIsVaultLocked] = useState(true);

  const handleSimulateHack = () => {
    if (commonPasswords.includes(playerPassword.toLowerCase())) {
      setCrackingResult('This password was cracked instantly!');
      setIsVaultLocked(false); // Vault unlocks
    } else if (playerPassword.length < 8) {
      setCrackingResult('Too short! It would be cracked in minutes.');
      setIsVaultLocked(false); // Vault unlocks
    } else {
      setCrackingResult('This password is strong! It would take years to crack.');
      setIsVaultLocked(true); // Vault stays locked
    }
  };

  return (
    <div className="password-hacking-sim">
      <h2>Password Hacking Simulation</h2>
      <p>Let’s see how hackers try to guess weak passwords!</p>

      <ul>
        <li>They try numbers: <code>123456</code> – too easy!</li>
        <li>They check common words: <code>password</code>.</li>
        <li>They try combos: <code>password123</code>.</li>
      </ul>

      <p>Your job? Build strong passwords to stop them!</p>

      <div className="password-input">
        <label htmlFor="password">Enter a Password:</label>
        <input
          type="text"
          id="password"
          value={playerPassword}
          onChange={(e) => setPlayerPassword(e.target.value)}
          placeholder="Type your password..."
        />
        <button onClick={handleSimulateHack}>Simulate Hack</button>
      </div>

      <div className="result">{crackingResult}</div>

      <div className={`vault ${isVaultLocked ? 'locked' : 'unlocked'}`}>
        <div className="lock"></div>
      </div>

      <Link to="/chapter2/defender-game">
        <button>Defend Techville!</button>
      </Link>
    </div>
  );
};

export default PasswordHackingSim;
