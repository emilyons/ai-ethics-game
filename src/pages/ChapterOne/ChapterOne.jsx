import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterOne.scss';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <h1>Chapter 1: The Awakening</h1>
      <p>
        Welcome to your AI journey! In this chapter, you'll learn the basics of AI and how it's shaping the world.
      </p>
      <nav className="chapter-navigation">
        <Link to="/chapter1/what-is-ai" className="nav-link">What is AI?</Link>
        <Link to="/chapter1/ai-in-everyday-life" className="nav-link">AI in Everyday Life</Link>
        <Link to="/chapter1/machine-learning" className="nav-link">Machine Learning Basics</Link>
        <Link to="/chapter1/data-training" className="nav-link">Data Training</Link>
        <Link to="/chapter1/pattern-recognition" className="nav-link">Pattern Recognition</Link>
        <Link to="/chapter1/sorting-game" className="nav-link">AI Sorting Game</Link>
      </nav>
    </div>
  );
};

export default ChapterOne;
