import styles from "./heroSection.module.css";
import ImgHotel from "../../../../assets/img-hotel.svg";

export default function HeroSection() {
  return (
    <section className={styles.container_banner}>
      <div className={styles.box_text}>
        <h1 className={styles.title_banner}>
          Bem Vindo ao
          <br />
          <span className={styles.title_color}>Regency Heights</span>
          <br />
          Hotel
        </h1>
        <p className={styles.text_banner}>
          Onde o luxo encontra o conforto. Nossa equipe está preparada para
          proporcionar uma experiência inesquecível, com serviço personalizado e
          atenção aos mínimos detalhes.
        </p>
        <button className={styles.btn_banner}>Explore Nossas Suites</button>
      </div>

      <div className={styles.box_img}>
        <img src={ImgHotel} alt="Hotel" className={styles.img_banner} />
      </div>
    </section>
  );
}
