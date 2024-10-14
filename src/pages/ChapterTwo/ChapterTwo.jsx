import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterTwo.scss';

const ChapterTwo = () => {
  return (
    <div className="chapter-two">
      <h1 className="chapter-two__title">Chapter 2: The Data Dilemma</h1>
      <p className="chapter-two__description">
        Welcome, Guardian! In this chapter, you'll learn about the importance of data privacy 
        and the best practices for protecting personal information in the digital world.
      </p>
      
      <div className="chapter-two__content">
        <h2>What is Personal Data?</h2>
        <p>
          Personal data includes any information related to you, such as your name, email, 
          location, or even your online activities. In today's digital age, it's crucial to 
          understand how to protect this information.
        </p>
      </div>

      <div className="chapter-two__mission">
        <h3>Your Mission</h3>
        <p>
          As an AI Guardian, your task is to navigate through various challenges and learn 
          how to safeguard personal data. Are you ready to become a protector of digital privacy?
        </p>
      </div>

      <div className="chapter-two__affirmation">
        <p>"I am responsible for protecting my personal information and respecting others' privacy."</p>
      </div>

      <Link to="/chapter2/data-dilemma" className="chapter-two__start-btn">
        Begin Your Data Protection Journey
      </Link>
    </div>
  );
};

export default ChapterTwo;
