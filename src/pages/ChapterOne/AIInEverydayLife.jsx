import React, { useState } from 'react';
import './AIInEverydayLife.scss';
import { Link } from 'react-router-dom';

// Page 3: AI in Everyday Life
// Objective: Show real-world examples of AI technologies.

// Dialogue:

// Narrator: “AI is all around you! It helps virtual assistants like Alexa, recommends your favorite shows, and even helps smart home devices.”
// Visuals: Display icons of everyday AI (smart speakers, self-driving cars, Netflix recommendations).
// Action:
// Players explore different rooms in the museum, each featuring an interactive example of AI in action. Clicking on each icon provides more details.

const AIInEverydayLife = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    { name: 'Living Room', ai: ['Smart Speaker', 'Smart TV'] },
    { name: 'Kitchen', ai: ['Smart Refrigerator', 'Voice-controlled Microwave'] },
    { name: 'Bedroom', ai: ['Sleep Tracker', 'Smart Lighting'] },
    { name: 'Office', ai: ['Virtual Assistant', 'Automated Scheduling'] }
  ];

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="ai-everyday-life">
      <h1>AI in Everyday Life</h1>
      <p>AI is all around you! It helps virtual assistants like Alexa, recommends your favorite shows, and even helps smart home devices.</p>
      
      <div className="museum-rooms">
        {rooms.map((room, index) => (
          <div key={index} className="room" onClick={() => handleRoomClick(room)}>
            <h2>{room.name}</h2>
            <p>Click to explore AI in this room</p>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="room-details">
          <h2>AI in the {selectedRoom.name}</h2>
          <ul>
            {selectedRoom.ai.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="affirmation">
        <p>"I understand how AI helps people solve problems every day."</p>
      </div>

      <Link to="/chapter1/machine-learning" className="next-lesson-btn">
        Next: Machine Learning Basics
      </Link>
    </div>
  );
};

export default AIInEverydayLife;
