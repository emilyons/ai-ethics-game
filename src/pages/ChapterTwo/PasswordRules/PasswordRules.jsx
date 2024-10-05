// PasswordRules.jsx (Page 4: What Makes a Password Strong)
// Purpose: Teach the specific rules that make a password strong.
// Content:
// Recap the password guidelines (8 characters, mix of letters/numbers/symbols, no personal info).
// Visual Aid: Examples of good and bad passwords.
// Activity: Interactive checklist where players review passwords and mark whether they follow each rule.

import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordRules.scss';

const PasswordRules = () => {
  return (
    <div className="password-rules">
      <h2>What Makes a Password Strong</h2>
      <p>To make a strong password, follow these rules:</p>
      <ul>
        <li>Use 8 or more characters</li>
        <li>Mix letters, numbers, and symbols</li>
        <li>Avoid using personal information</li>
      </ul>
      <p>Let’s practice with some examples!</p>
      <div className="password-examples">
        
        <div className="password-example">
          <p>Bad Password:</p>
          <p>password123</p>
          <p>Reason: Too short</p>
        </div>
        <div className="password-example">
          <p>Good Password:</p>
          <p>Str0ngP@ssw0rd!</p>
          <p>Reason: Mix of letters, numbers, and symbols</p>
        </div>
      </div>

      <h2>What Makes a Password Strong?</h2>
      <p>As a Guardian, your password needs to follow these rules:</p>
      <ul>
        <li>At least 8 characters.</li>
        <li>A mix of letters, numbers, and symbols.</li>
        <li>No personal info (like your name or birthday).</li>
        <li>Use different passwords for different accounts.</li>
      </ul>
      <h3>Examples:</h3>
      <div>
        <strong>Weak Password:</strong> <code>dog123</code> <br />
        <strong>Strong Password:</strong> <code>FluffyDragon!45</code>
      </div>
      <Link to="/chapter2/password-hacking">
        <button>Simulate Password Hacking</button>
      </Link>
    </div>
  );
};

export default PasswordRules