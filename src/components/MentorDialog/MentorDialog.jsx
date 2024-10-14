// MentorDialog.jsx
import React, { useState } from 'react';
import './MentorDialog.scss';

const mentorDialog = [
  "Greetings, Guardian-in-training! Your journey to mastering passwords begins now.",
  "Beware of passwords like '123456' or 'admin'—they’re so common that hackers try them first.",
  "And yes, long and unique phrases are strong, but let's focus on these basics first to defend Techville!"
];

const MentorDialog = () => {
  const [dialogIndex, setDialogIndex] = useState(0);

  const nextDialog = () => {
    setDialogIndex((prevIndex) => (prevIndex + 1) % mentorDialog.length);
  };

  return (
    <div className="mentor-dialog">
      <p>{mentorDialog[dialogIndex]}</p>
      <button onClick={nextDialog}>Next</button>
    </div>
  );
};

export default MentorDialog;
