import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChapterOne.scss';
import SortingGame from '../../components/SortingGame/SortingGame';

const ChapterOne = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="chapter-one">
      <h1>Chapter 1: The Awakening</h1>
      <p>
        Welcome to your AI journey! In this chapter, you'll learn the basics of AI and how it's shaping the world.
      </p>
      <h2>What is AI?</h2>
      <p>
        Artificial Intelligence (AI) refers to machines and systems that mimic human intelligence to perform tasks like decision-making, speech recognition, and more.
      </p>
      <h2>AI in Everyday Life</h2>
      <p>Here are some examples of AI you've probably interacted with:</p>
      <ul>
        <li>Voice Assistants (like Siri, Alexa)</li>
        <li>Movie Recommendations (like Netflix)</li>
        <li>Smart Home Devices (like thermostats)</li>
      </ul>
      <h3>Ready for a challenge?</h3>
      <p>Let's sort out which technologies use AI and which ones don't.</p>
      {isGameStarted ? (
        <SortingGame />
      ) : (
        <button onClick={handleStartGame}>Start Sorting Game</button>
      )}
    </div>
  );
};

export default ChapterOne;