import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterOne.scss';

const ChapterOne = () => {
  return (
    <div className="chapter-one">
      <h1>Chapter 1: The Awakening</h1>
      <p>Welcome to the beginning of your AI ethics journey! In this chapter, you'll learn the basics of AI and its impact on our world.</p>
      <p>Get ready to explore how AI is used in daily life and discover the ethical considerations we need to keep in mind.</p>
      <Link to="/game/chapter1" className="chapter-one__cta">Start the Adventure</Link>
    </div>
  );
};

export default ChapterOne;