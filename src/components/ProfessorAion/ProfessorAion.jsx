import React, { useState, useEffect } from "react";
import "./ProfessorAion.scss";
import professorAionImage from "/src/assets/images/professor-aion.png";

const aionDialog = [
  "Welcome to the AI Museum, Guardians! I'm Professor Aion, your guide through the world of AI.",
  "Let's explore how AI is used in everyday life. Click on each room to learn more!",
  "Remember, AI is all around us, making our lives easier in ways we might not even notice."
];

const ProfessorAion = ({ onComplete }) => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (dialogIndex === aionDialog.length - 1) {
      onComplete();
    }
  }, [dialogIndex, onComplete]);

  const nextDialog = () => {
    if (dialogIndex < aionDialog.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      setIsCollapsed(true);
    }
  };

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`professor-aion ${isOpen ? "open" : ""} ${isCollapsed ? "collapsed" : ""}`}>
      <img
        src={professorAionImage}
        alt="Professor Aion"
        className="professor-image"
        onClick={toggleDialog}
      />
      {isOpen && !isCollapsed && (
        <div className="professor-dialog">
          <p>{aionDialog[dialogIndex]}</p>
          <button
            onClick={nextDialog}
            className="professor-button"
          >
            {dialogIndex < aionDialog.length - 1 ? "Next" : "Got it!"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfessorAion;
