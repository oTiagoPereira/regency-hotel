// Calendar.js
import React, { useState, useRef, useEffect } from "react";
import {
  format,
  addMonths,
  subMonths,
  isBefore,
  isToday,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Calendar.module.css";
import Right from "../../../../assets/right.svg";
import Left from "../../../../assets/left.svg";

export default function Calendar({ onSelect, minDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDateClick = (day) => {
    if (!isBefore(day, new Date()) && !isBefore(day, minDate)) {
      if (!checkInDate || (checkInDate && checkOutDate)) {
        setCheckInDate(day);
        setCheckOutDate(null);
      } else {
        setCheckOutDate(day);
      }
      onSelect(day);
    }
  };

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onSelect(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const startOfCurrentMonth = startOfMonth(currentMonth);
  const endOfCurrentMonth = endOfMonth(currentMonth);
  const firstDayIndex = getDay(startOfCurrentMonth);
  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  const emptySpaces = Array(firstDayIndex).fill(null);
  const daysToRender = [...emptySpaces, ...daysInMonth];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const isInRange = (day) => {
    return (
      checkInDate && checkOutDate && day >= checkInDate && day <= checkOutDate
    );
  };

  return (
    <div className={styles.calendarContainer} ref={calendarRef}>
      <div className={styles.calendar}>
        <span className={styles.indication}></span>

        <div className={styles.calendarHeader}>
          <button
            onClick={handlePreviousMonth}
            className={styles.calendarButton}
          >
            <img
              src={Left}
              alt="Anterior"
              className={styles.calendarButtonImg}
            />
          </button>
          <h2 className={styles.calendarMonth}>
            {capitalizeFirstLetter(
              format(currentMonth, "MMMM yyyy", { locale: ptBR })
            )}
          </h2>
          <button onClick={handleNextMonth} className={styles.calendarButton}>
            <img
              src={Right}
              alt="Próximo"
              className={styles.calendarButtonImg}
            />
          </button>
        </div>
        <div className={styles.weekDays}>
          {weekDays.map((day) => (
            <div key={day} className={styles.weekDay}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.calendarGrid}>
          {daysToRender.map((day, index) => (
            <div
              key={index}
              className={`${styles.calendarDay} ${
                day && isToday(day) ? styles.today : ""
              }`}
              onClick={() => day && handleDateClick(day)}
              style={{
                backgroundColor: isInRange(day)
                  ? "#add8e6"
                  : day && (isBefore(day, new Date()) || isBefore(day, minDate))
                  ? "#c8c8c886"
                  : "",
                cursor:
                  day && (isBefore(day, new Date()) || isBefore(day, minDate))
                    ? "not-allowed"
                    : "pointer",
                color:
                  day && (isBefore(day, new Date()) || isBefore(day, minDate))
                    ? "#00000082"
                    : "",
                opacity: day ? 1 : 0,
              }}
            >
              {day ? format(day, "d") : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
