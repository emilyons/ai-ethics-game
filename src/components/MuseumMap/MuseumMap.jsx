// src/components/MuseumMap/MuseumMap.jsx
import React from "react";
import "./MuseumMap.scss";

const MuseumMap = ({ rooms, onRoomClick, visitedRooms }) => {
  return (
    <div className="museum-map">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`room ${visitedRooms.includes(room.id) ? 'visited' : ''}`}
          style={{
            left: `${room.x}%`,
            top: `${room.y}%`,
            width: `${room.width}%`,
            height: `${room.height}%`,
          }}
          onClick={() => onRoomClick(room)}
        >
          <img src={`/icons/${room.name.toLowerCase()}.svg`} alt={`${room.name} icon`} />
          <p>{room.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MuseumMap;

