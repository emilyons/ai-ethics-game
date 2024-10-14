

import React, { useState } from 'react';
import './MentorDialog.scss';

const mentorDialog = [
  "Greetings, Guardian-in-training! Your journey to mastering passwords begins now.",
  "Beware of passwords like '123456' or 'admin'—they’re so common that hackers try them first.",
  "And yes, long and unique phrases are strong, but let's focus on these basics first to defend Techville!"
];

const MentorDialog = ({ onComplete }) => {
  const [dialogIndex, setDialogIndex] = useState(0);

  const nextDialog = () => {
    const newIndex = dialogIndex + 1;
    if (newIndex < mentorDialog.length) {
      setDialogIndex(newIndex);
    } else {
      onComplete(); // Signal that mentor dialog is completed
    }
  };

  return (
    <div className="mentor-dialog">
      <p>{mentorDialog[dialogIndex]}</p>
      <button 
        onClick={nextDialog} 
        disabled={dialogIndex >= mentorDialog.length - 1} // Disable after last message
      >
        {dialogIndex < mentorDialog.length - 1 ? "Next" : "Completed"}
      </button>
    </div>
  );
};

export default MentorDialog;

