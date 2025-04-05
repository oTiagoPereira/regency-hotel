import styles from "./checkBox.module.css";
import React, { useState, useEffect, useRef } from "react";
import { addDays } from "date-fns";
import CalendarioImg from "../../../assets/calendario.svg";
import CamaIcon from "../../../assets/camaIcon.svg";
import Pessoas from "../../../assets/people.svg";
import Calendar from "./calendar";
import RoomSelector from "./roomSelector";
import GuestSelector from "./guestSelector";

export default function CheckBox() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
  const [isCheckInCalendarVisible, setCheckInCalendarVisible] = useState(false);
  const checkInCalendarRef = useRef(null);
  const [selectedRooms, setSelectedRooms] = useState(1);
  const [isRoomSelectorVisible, setRoomSelectorVisible] = useState(false);
  const roomSelectorRef = useRef(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0 });

  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(() =>
    addDays(new Date(), 1)
  );
  const [isCheckOutCalendarVisible, setCheckOutCalendarVisible] =
    useState(false);
  const checkOutCalendarRef = useRef(null);


  const toggleRoomSelector = () => {
    setRoomSelectorVisible(!isRoomSelectorVisible);
  };

  const handleCheckInDateSelect = (date) => {
    setSelectedCheckInDate(date);
    setCheckInDate(date);
    setSelectedCheckOutDate(date);
    setCheckInCalendarVisible(false);
    setCheckOutCalendarVisible(true);
  };

  const handleCheckOutDateSelect = (date) => {
    setSelectedCheckOutDate(date);
    setCheckOutDate(date);
    setCheckOutCalendarVisible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        checkInCalendarRef.current &&
        !checkInCalendarRef.current.contains(event.target)
      ) {
        setCheckInCalendarVisible(false);
      }
      if (
        roomSelectorRef.current &&
        !roomSelectorRef.current.contains(event.target)
      ) {
        setRoomSelectorVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    return date
      ? date.toLocaleDateString("pt-BR")
      : new Date().toLocaleDateString("pt-BR");
  };

  return (
    <section className={styles.container_check}>
      <div className={styles.check}>
        {/* CHECK-IN */}
        <div className={styles.check_in}>
          <div className={styles.box_img_check}>
            <img
              src={CalendarioImg}
              alt="Calendário"
              className={styles.check_img}
            />
          </div>
          <div
            className={styles.check_text}
            onClick={() => setCheckInCalendarVisible(true)}
          >
            <p className={styles.title_check}>Check-in</p>
            <p className={styles.date}>{formatDate(selectedCheckInDate)}</p>
          </div>
          {isCheckInCalendarVisible && (
            <div ref={checkInCalendarRef}>
              <Calendar
                onSelect={handleCheckInDateSelect}
                selectedDate={selectedCheckInDate}
                isCheckIn
              />
            </div>
          )}
        </div>

        <span className={styles.check_line}></span>

        {/* CHECK-OUT */}
        <div className={styles.check_out}>
          <div className={styles.box_img_check}>
            <img
              src={CalendarioImg}
              alt="Calendário"
              className={styles.check_img}
            />
          </div>
          <div
            className={styles.check_text}
            onClick={() => setCheckOutCalendarVisible(true)}
          >
            <p className={styles.title_check}>Check-out</p>
            <p className={styles.date}>{formatDate(selectedCheckOutDate)}</p>
          </div>
          {isCheckOutCalendarVisible && (
            <div ref={checkOutCalendarRef}>
              <Calendar
                onSelect={handleCheckOutDateSelect}
                selectedDate={selectedCheckOutDate}
                minDate={selectedCheckInDate}
              />
            </div>
          )}
        </div>

        <span className={styles.check_line}></span>

        {/* Quartos */}
        <div
          className={styles.check_quartos}
          onClick={toggleRoomSelector}
        >
          <div className={styles.box_img_check}>
            <img src={Cama} alt="Cama" className={styles.check_img} />
          </div>
          <div className={styles.check_text}>
            <RoomSelector onSelect={setSelectedRooms} />
          </div>

        <span className={styles.check_line}></span>

        {/* Pessoas */}
        <div className={styles.check_pessoas}>
          <div className={styles.box_img_check}>
            <img src={Pessoas} alt="Pessoas" className={styles.check_img} />
          </div>
          <div className={styles.check_text}>
              <GuestSelector
                onSelect={(adults, children) => setGuests({ adults, children })}
              />
          </div>
        </div>

        <span className={styles.check_line}></span>

        {/* Botão */}
        <button className={styles.btn_disponibilidade}>
          Verificar Disponibilidade
        </button>

        <div className={styles.text_bottom_check}>
          <h4>
            Reserve diretamente conosco para aproveitar o Regency Heights, um
            programa flexível de check-in e check-out e receba os melhores
            valores disponíveis.
          </h4>
        </div>
      </div>
    </section>
  );
}
