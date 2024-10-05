import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordBasics.scss';

const PasswordBasics = () => {
  return (
    <div className="password-basics">
      <h2>Why Passwords Matter</h2>
      <p>Passwords are the keys that lock Techville's vaults. Weak passwords make it easy for hackers to break in!</p>
      <h3>Let’s build a strong password!</h3>
      <p>To build a strong password, use letters, numbers, and symbols. The longer, the better!</p>
      
      <Link to="/chapter2/build-password">
        <button>Next: Build a Strong Password</button>
      </Link>
    </div>
  );
};

export default PasswordBasics;
