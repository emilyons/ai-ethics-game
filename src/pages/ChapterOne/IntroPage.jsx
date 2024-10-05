import React from 'react';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <h1>Welcome to the AI Museum!</h1>
      <p>You’re about to learn the secrets of AI and how it shapes the world around you.</p>
      <Link to="/chapter1/what-is-ai">
        <button>Start Your Journey!</button>
      </Link>
    </div>
  );
};

export default IntroPage;
