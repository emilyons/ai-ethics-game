import React, { useState } from 'react';
import PasswordStrengthMeter from '../../../components/PasswordStrengthMeter/PasswordStrengthMeter';
import { Link } from 'react-router-dom';

const BuildPassword = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="build-password">
      <h2>Build a Strong Password</h2>
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <PasswordStrengthMeter password={password} />

      <Link to="/chapter2/password-rules">
        <button>Proceed to Password Rules</button>
      </Link>
    </div>
  );
};

export default BuildPassword;

