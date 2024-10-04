import React, { useState } from 'react';
import './ChapterTwo.scss';
import { Link } from 'react-router-dom';
import Ch2Game from '../../components/Ch2Game/Ch2Game'; 
import { useNavigate } from 'react-router-dom';


const ChapterTwo = () => {
  const navigate = useNavigate();
  return (
    <div className="chapter-two">
      <h1>Chapter 2: The Data Dilemma</h1>
      <p>
        In this chapter, you’ll learn about the importance of data privacy and the best practices for protecting personal information.
      </p>
      <h2>What is Personal Data?</h2>
      <p>Personal data includes any information related to you, such as your name, email, or location.</p>  
      {/* Add interactive elements or a game here */}
      <Ch2Game />
    <button onClick={() => navigate('/chapter3')}>
        Proceed to Next Lesson
      </button>
    </div>
  );
};

export default ChapterTwo;
