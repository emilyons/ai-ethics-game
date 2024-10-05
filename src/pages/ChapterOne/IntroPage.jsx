import React from "react";
import { Link } from "react-router-dom";

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
        You’re about to learn the secrets of AI and how it shapes the world
        around you.
      </p>
      <Link to="/chapter1/what-is-ai">
        <button>Start Your Journey!</button>
      </Link>
    </div>
  );
};

export default IntroPage;
