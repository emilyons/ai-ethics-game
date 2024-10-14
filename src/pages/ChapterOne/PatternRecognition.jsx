import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PatternRecognition.scss';

const faceImages = [
  { id: 1, src: 'path/to/face1.jpg', features: { glasses: false, smile: true } },
  { id: 2, src: 'path/to/face2.jpg', features: { glasses: true, smile: false } },
  { id: 3, src: 'path/to/face3.jpg', features: { glasses: false, smile: false } },
  { id: 4, src: 'path/to/face4.jpg', features: { glasses: true, smile: true } },
];

const PatternRecognition = () => {
  const [targetFace, setTargetFace] = useState(faceImages[0]);
  const [selectedFace, setSelectedFace] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSelection = (face) => {
    if (face.id === targetFace.id) {
      setFeedback('Correct! You found the match.');
    } else {
      setFeedback('Try again!');
    }
    setSelectedFace(face.id);
  };

  return (
    <div className="pattern-recognition">
      <h1>Pattern Recognition: Find the Matching Face!</h1>
      <div className="target-face">
        <h3>Target Face</h3>
        <img src={targetFace.src} alt="Target Face" />
      </div>
      <div className="face-grid">
        {faceImages.map((face) => (
          <img
            key={face.id}
            src={face.src}
            alt={`Face ${face.id}`}
            className={selectedFace === face.id ? 'selected' : ''}
            onClick={() => handleSelection(face)}
          />
        ))}
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
      <Link to="/chapter1/mission-complete" className="next-lesson-btn">
        Complete Chapter One
      </Link>
    </div>
  );
};

export default PatternRecognition;
