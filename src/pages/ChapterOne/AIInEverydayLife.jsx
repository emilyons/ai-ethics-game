import React, { useState } from "react";
import "./AIInEverydayLife.scss";
import { Link } from "react-router-dom";
import MuseumMap from "../../components/MuseumMap/MuseumMap";
import TourGuide from "../../components/TourGuide/TourGuide";

// Room Data: Define the list of rooms with their AI elements
const rooms = [
  { id: 1, name: "Living Room", ai: ["Smart Speaker", "Smart TV"], x: 10, y: 10, width: 30, height: 20 },
  { id: 2, name: "Kitchen", ai: ["Smart Refrigerator", "Voice-controlled Microwave"], x: 50, y: 10, width: 30, height: 20 },
  { id: 3, name: "Bedroom", ai: ["Sleep Tracker", "Smart Lighting"], x: 10, y: 40, width: 30, height: 20 },
  { id: 4, name: "Office", ai: ["Virtual Assistant", "Automated Scheduling"], x: 50, y: 40, width: 30, height: 20 },
];

const AIInEverydayLife = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [visitedRooms, setVisitedRooms] = useState([]);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    if (!visitedRooms.includes(room.id)) {
      setVisitedRooms([...visitedRooms, room.id]);
    }
  };

  return (
    <div className="ai-everyday-life">
      <h1>Explore the Museum of AI!</h1>
      <TourGuide message="Welcome to the AI Museum! Click on a room to learn about AI in everyday life." />
      
      <MuseumMap rooms={rooms} onRoomClick={handleRoomClick} visitedRooms={visitedRooms} />

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

      <div className="progress-tracker">
        <p>Rooms Explored: {visitedRooms.length} / {rooms.length}</p>
      </div>

      <div className="affirmation">
        <p>"I've discovered how AI helps solve everyday problems!"</p>
      </div>

      {visitedRooms.length === rooms.length && (
        <Link to="/chapter1/machine-learning" className="next-lesson-btn">
          Next: Machine Learning Basics
        </Link>
      )}
    </div>
  );
};

export default AIInEverydayLife;
