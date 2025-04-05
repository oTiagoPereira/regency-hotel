import React, { useState, useRef, useEffect } from "react";
import styles from "./GuestSelector.module.css";

export default function GuestSelector({ onSelect }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const maxAdults = 4;
  const maxTotalGuests = 5;

  const totalGuests = adults + children;

  const handleIncreaseAdults = () => {
    if (adults < maxAdults && totalGuests < maxTotalGuests) {
      setAdults(adults + 1);
      onSelect(adults + 1, children);
    }
  };

  const handleDecreaseAdults = () => {
    if (adults > 1) {
      const newChildren = Math.min(children, (adults - 1) * 2);
      setAdults(adults - 1);
      setChildren(newChildren);
      onSelect(adults - 1, newChildren);
    }
  };

  const handleIncreaseChildren = () => {
    if (children < adults * 2 && totalGuests < maxTotalGuests) {
      setChildren(children + 1);
      onSelect(adults, children + 1);
    }
  };

  const handleDecreaseChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
      onSelect(adults, children - 1);
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
    <div className={styles.guestSelectorContainer} ref={selectorRef}>
      <button className={styles.selectorButton} onClick={toggleSelector}>
        {adults} {adults > 1 ? "Adultos" : "Adulto"}, {children}{" "}
        {children === 1 ? "Criança" : "Crianças"}
      </button>

      {isOpen && (
        <div className={styles.selectorPopup}>
          <span className={styles.indication}></span>

          <div className={styles.option}>
            <span>Adultos</span>
            <div className={styles.counter}>
              <button onClick={handleDecreaseAdults} disabled={adults === 1}>
                -
              </button>
              <span>{adults}</span>
              <button
                onClick={handleIncreaseAdults}
                disabled={adults >= maxAdults || totalGuests >= maxTotalGuests}
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.option}>
            <span>Crianças</span>
            <div className={styles.counter}>
              <button
                onClick={handleDecreaseChildren}
                disabled={children === 0}
              >
                -
              </button>
              <span>{children}</span>
              <button
                onClick={handleIncreaseChildren}
                disabled={
                  children >= adults * 2 || totalGuests >= maxTotalGuests
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
