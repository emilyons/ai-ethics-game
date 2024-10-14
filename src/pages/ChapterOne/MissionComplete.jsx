import React from "react";
import "./MissionComplete.scss";
import { Link } from "react-router-dom";

// Page 8: Mission Complete - AI Guardian Apprentice!
// Objective: Congratulate players on their first steps to becoming an AI Guardian.

// Dialogue:

// Narrator: “Fantastic work, Guardian! You’ve completed your first mission in understanding AI. Next, you’ll protect Techville’s data and learn how to keep it safe.”
// Visuals: A celebratory animation with badges for completing the lesson.
// Action:
// Players receive a digital badge titled "AI Guardian Apprentice" and proceed to Chapter 2.

const MissionComplete = () => {
  return (
    <div className="mission-complete-container">
      <h1>Mission Complete!</h1>
      <div className="celebration-animation">
        {/* Add a celebratory animation here */}
        <img src="/assets/images/celebration.gif" alt="Celebration" />
      </div>
      <p className="congratulations">
        Fantastic work, Guardian! You've completed your first mission in understanding AI.
      </p>
      <div className="badge">
        <img src="/assets/images/ai-guardian-apprentice-badge.png" alt="AI Guardian Apprentice Badge" />
        <p>You've earned the "AI Guardian Apprentice" badge!</p>
      </div>
      <p className="next-mission">
        Next, you'll protect Techville's data and learn how to keep it safe.
      </p>
      <div className="affirmation">
        <p>"I am building a strong foundation to create a brighter, smarter future."</p>
      </div>
      <Link to="/chapter2" className="next-chapter-btn">
        Proceed to Chapter 2
      </Link>
    </div>
  );
};

export default MissionComplete;
