import React from "react";
import { useState } from "react";

function Players({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing({ isEditing: true });
    setIsEditing(true);
    console.log(isEditing);
  };

  return (
    <>
      <li>
        <span className="player">
          {isEditing === false ? (
            <span className="player-name">{name}</span>
          ) : (
            <input type="text" required></input>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
      </li>
    </>
  );
}

export default Players;
