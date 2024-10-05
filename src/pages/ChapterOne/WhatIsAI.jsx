import React, { useState } from 'react';
import './WhatIsAI.scss';
import { Link } from 'react-router-dom';

// Chapter 1 - Page 2: What is AI?
// Objective: Provide a simple definition of AI and introduce its core principles, including that it mimics human intelligence.

const WhatIsAI = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="what-is-ai">
      <h1>What is AI?</h1>
      
      <div className="ai-definition">
        <p>
          AI, or artificial intelligence, is technology that can learn, reason, and solve problems—just like humans. 
          But unlike us, it does this using data.
        </p>
      </div>

      <div className="hologram-interaction">
        <img src="/assets/images/professor-aion-hologram.png" alt="Professor Aion Hologram" />
        <button onClick={toggleExplanation}>Interact with Professor Aion</button>
      </div>

      {showExplanation && (
        <div className="ai-explanation">
          <h2>Professor Aion explains:</h2>
          <p>
            "AI systems are like very smart computers. They can recognize patterns, make decisions, and even learn from their mistakes. 
            Imagine a computer that can see a picture and tell you what's in it, or one that can play chess better than any human!"
          </p>
        </div>
      )}

      <div className="ai-examples">
        <h2>Examples of AI at Work:</h2>
        <ul>
          <li>Robots in factories</li>
          <li>Chatbots on websites</li>
          <li>AI opponents in video games</li>
        </ul>
      </div>

      <div className="affirmation">
        <p>"I can understand how AI thinks and solves problems, just like me!"</p>
      </div>

      <Link to="/chapter1/ai-in-everyday-life" className="next-lesson-btn">
        Next: AI in Everyday Life
      </Link>
    </div>
  );
};

export default WhatIsAI;
