import React from 'react';
import { Link } from 'react-router-dom';
import './DataDilemma.scss';
const DataDilemma = () => {
  return (
    <div className="data-dilemma">
      <h1>Chapter 2: The Data Dilemma</h1>
      <p>Welcome back, Guardian! A data breach has occurred in the Data Privacy Wing. We need you to secure Techville's vaults by learning the fundamentals of password security and data encryption.</p>
      <Link to="/chapter2/password-basics">
        <button>Begin Your Mission</button>
      </Link>
    </div>
  );
};

export default DataDilemma;
