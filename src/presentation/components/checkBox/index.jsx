import styles from "./checkBox.module.css";
import React from "react";
import CalendarioImg from "../../../assets/calendario.svg";
import Cama from "../../../assets/bed.svg";
import Pessoas from "../../../assets/people.svg";

export default function CheckBox() {
  return (
    <div className={styles.check}>
      <div className={styles.check_in}>
        <div className={styles.box_img_check}>
          <img
            src={CalendarioImg}
            alt="Calendário"
            className={styles.check_img}
          />
        </div>
        <div className={styles.check_text}>
          <p className={styles.title_check}>Check-in</p>
          <p className={styles.date}>08/08/2022</p>
        </div>
      </div>

      <span className={styles.check_line}></span>

      <div className={styles.check_out}>
        <div className={styles.box_img_check}>
          <img
            src={CalendarioImg}
            alt="Calendário"
            className={styles.check_img}
          />
        </div>
        <div className={styles.check_text}>
          <p className={styles.title_check}>Check-out</p>
          <p className={styles.date}>08/08/2022</p>
        </div>
      </div>

      <span className={styles.check_line}></span>

      <div className={styles.check_quartos}>
        <div className={styles.box_img_check}>
          <img src={Cama} alt="Cama" className={styles.check_img} />
        </div>
        <div className={styles.check_text}>
          <p className={styles.quant_quartos}>1 Quarto</p>
        </div>
      </div>

      <span className={styles.check_line}></span>

      <div className={styles.check_pessoas}>
        <div className={styles.box_img_check}>
          <img src={Pessoas} alt="Pessoas" className={styles.check_img} />
        </div>
        <div className={styles.check_text}>
          <p className={styles.quant_pessoas}>1 Adulto, 2 Crianças</p>
        </div>
      </div>

      <span className={styles.check_line}></span>

      <button className={styles.btn_disponibilidade}>
        Verificar Disponibilidade
      </button>

      <div className={styles.text_bottom_check}>
        <h4>
          Reserve diretamente conosco para aproveitar o Regency Heights, um
          programa flexível de check-in e check-out e receba os melhores valores
          disponível.
        </h4>
      </div>
    </div>
  );
}
