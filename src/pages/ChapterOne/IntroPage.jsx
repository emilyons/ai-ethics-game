import React from "react";
import { Link } from "react-router-dom";
import "./IntroPage.scss";

// Page 1: Welcome to the AI Museum!
// Objective: Introduce players to Techville’s Museum of Innovation, where they’ll begin learning about AI.

// Dialogue:

// Narrator: “Welcome, Guardians! Today, you’ll explore the world of AI—machines that learn and make decisions like humans. Let’s start with the basics!”
// Visuals: A grand entrance to a futuristic museum, with exhibits displayed.
// Action:
// Players enter the museum, where they will discover AI applications and how AI affects their daily lives.

const IntroPage = () => {
  return (
    <div className="intro-page">
      <h1>Welcome to the AI Museum!</h1>
      <p>
        Greetings, Guardians! Today, you'll embark on an exciting journey into the world of AI—machines that learn and make decisions like humans. Are you ready to explore the basics of Artificial Intelligence?
      </p>
      <div className="museum-entrance">
        <img src="/assets/images/ai-museum-entrance.jpg" alt="AI Museum Entrance" />
        <p>Step into the grand entrance of our futuristic museum, where amazing exhibits await!</p>
      </div>
      <p>
        As you enter the museum, you'll discover fascinating AI applications and learn how they affect your daily life. Get ready for an adventure in understanding and shaping the future of technology!
      </p>
      <div className="affirmation">
        <p>"I am a curious explorer, discovering how AI makes the world smarter."</p>
      </div>
      <Link to="/chapter1/what-is-ai">
        <button className="start-journey-btn">Start Your Journey!</button>
      </Link>
    </div>
  );
};

export default IntroPage;
