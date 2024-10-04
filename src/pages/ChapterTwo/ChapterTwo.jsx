import React, { useState } from 'react';
import './ChapterTwo.scss';
import Ch2Game from '../../components/Ch2Game/Ch2Game';     



const ChapterTwo = () => {
  return (
    <div className="chapter-two">
      <h1>Chapter 2: The Data Dilemma</h1>
      <p>
        In this chapter, you’ll learn about the importance of data privacy and the best practices for protecting personal information.
      </p>
      <h2>What is Personal Data?</h2>
      <p>Personal data includes any information related to you, such as your name, email, or location.</p>
      {/* Add interactive elements or a game here */}
    </div>
  );
};

export default ChapterTwo;
