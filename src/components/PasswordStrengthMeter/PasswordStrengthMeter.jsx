import React from 'react';
import './PasswordStrengthMeter.scss';
const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = () => {
    let strength = 0;
    if (password.length > 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const strength = calculateStrength();

  return (
    <div className="password-strength-meter">
      <p>Password Strength: {strength}/4</p>
      <div className="strength-bar" style={{ width: `${(strength / 4) * 100}%`, backgroundColor: strength === 4 ? 'green' : 'red' }} />
    </div>
  );
};

export default PasswordStrengthMeter;
