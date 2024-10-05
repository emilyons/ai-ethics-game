// PasswordHackingSim.jsx (Page 6: Password Hacking Simulation)
// Purpose: Simulate how hackers try to crack weak passwords.
// Content:
// Walk through a simplified hacker simulation: guessing simple numbers, dictionary words, etc.
// Show different steps a hacker takes.
// Visual Aid: Vault-locking animation that demonstrates why strong passwords hold up.
// Activity: Interactive simulation where players can try to hack passwords.

import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordHackingSim.scss';

const PasswordHackingSim = () => {
  return (
    <div>
    <div className="password-hacking-sim">
         <div className="password-hacking-sim">
            <h2>Password Hacking Simulation</h2>
            <p>Let’s see how hackers try to guess weak passwords!</p>
            <ul>
        <li>First, they try numbers: <code>123456</code> – too easy!</li>
        <li>Then, they check common words: <code>password</code>.</li>
        <li>Finally, they try combos: <code>password123</code>.</li>
      </ul>
      <p>Your job? Build strong passwords to stop them!</p>
      <Link to="/chapter2/defender-game">
        <button>Defend Techville!</button>
      </Link>
    </div>
  </div>

        {/* <div className="step">
          <p>Step 1: Guess the Password</p>
          <p>Hackers start by trying simple combinations like 123456, password, or admin.</p>
        </div>
        <div className="step">
          <p>Step 2: Use Dictionary Words</p>
          <p>Hackers also try common words like “hello” or “admin.”</p>
        </div>
        <div className="step">
          <p>Step 3: Personal Information</p>
          <p>They might try names, birthdays, or other personal details.</p>
        </div>
      </div>
      <p>Strong passwords like “Str0ngP@ssw0rd!” are nearly impossible to guess.</p>
      <div className="vault-locking">
        <div className="vault">
          <div className="lock"></div>
        </div>
        <p>Strong passwords hold up against hackers!</p>
      </div>
      <p>Now, let’s try hacking some passwords!</p>
      <Link to="/chapter2/hacking-practice">
        <button>Try Hacking Passwords</button>
      </Link>
    </div> */}
    </div>
  );
};

export default PasswordHackingSim;
