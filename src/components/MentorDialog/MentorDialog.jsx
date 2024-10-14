import React, { useState, useEffect } from "react";
import "./MentorDialog.scss";
import mentorImage from "/src/assets/images/sage-mentor.png";

const mentorDialog = [
  "Greetings, Guardian-in-training! Your journey to mastering passwords begins now.",
  "Beware of passwords like '123456' or 'admin'—they're so common that hackers try them first.",
  "And yes, long and unique phrases are strong, but let's focus on these basics first to defend Techville!"
];

const MentorDialog = ({ onComplete }) => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check if dialog is complete and trigger onComplete
  useEffect(() => {
    if (dialogIndex === mentorDialog.length - 1) {
      onComplete();
    }
  }, [dialogIndex, onComplete]);

  const nextDialog = () => {
    if (dialogIndex < mentorDialog.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      setIsCollapsed(true);
    }
  };

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mentor-widget ${isOpen ? "open" : ""} ${isCollapsed ? "collapsed" : ""}`}>
      <img
        src={mentorImage}
        alt="Sage the Mentor"
        className="mentor-image"
        onClick={toggleDialog}
      />
      {isOpen && !isCollapsed && (
        <div className="mentor-dialog">
          <p>{mentorDialog[dialogIndex]}</p>
          <button
            onClick={nextDialog}
            className="mentor-button"
          >
            {dialogIndex < mentorDialog.length - 1 ? "Next" : "Got it!"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MentorDialog;
