import React, { useState, useRef, useEffect } from "react";
import styles from "./RoomSelector.module.css";

export default function RoomSelector({ onSelect, maxRooms = 5 }) {
  const [roomCount, setRoomCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const handleIncrease = () => {
    if (roomCount < maxRooms) {
      setRoomCount(roomCount + 1);
      onSelect(roomCount + 1);
    }
  };

  const handleDecrease = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
      onSelect(roomCount - 1);
    }
  };

  const toggleSelector = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (selectorRef.current && !selectorRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.roomSelectorContainer} ref={selectorRef}>
      <button className={styles.selectorButton} onClick={toggleSelector}>
        {roomCount} {roomCount > 1 ? "Quartos" : "Quarto"}
      </button>

      {isOpen && (
        <div className={styles.selectorPopup}>
          <span className={styles.indication}></span>

          <button
            className={styles.decreaseButton}
            onClick={handleDecrease}
            disabled={roomCount === 1}
          >
            -
          </button>
          <span className={styles.roomCount}>
            {roomCount} {roomCount > 1 ? "Quartos" : "Quarto"}
          </span>
          <button
            className={styles.increaseButton}
            onClick={handleIncrease}
            disabled={roomCount === maxRooms}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
