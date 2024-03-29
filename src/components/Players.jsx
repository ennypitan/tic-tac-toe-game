import React from "react";
import { useState } from "react";

function Players({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    // setIsEditing({ isEditing: true });
    setIsEditing((edit) => !edit);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing === false ? (
            <span className="player-name">{editedName}</span>
          ) : (
            <input
              type="text"
              required
              value={editedName}
              onChange={handleNameChange}
            ></input>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Players;
