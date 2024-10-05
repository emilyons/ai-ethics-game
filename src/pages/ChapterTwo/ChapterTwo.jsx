import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterTwo.scss';

const ChapterTwo = () => {
  return (
    <div className="chapter-two">
      <h1>Chapter 2: The Data Dilemma</h1>
      <p>In this chapter, you’ll learn about the importance of data privacy and the best practices for protecting personal information.</p>
      <h2>What is Personal Data?</h2>
      <p>Personal data includes any information related to you, such as your name, email, or location.</p>

      <Link to="/chapter2/data-dilemma">
        <button>Start Lesson</button>
      </Link>
    </div>
  );
};

export default ChapterTwo;
