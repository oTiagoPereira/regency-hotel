import styles from "./amenitiesSection.module.css";

export default function Amenities() {
  return (
    <section className={styles.container_amenities}>
      <h1 className={styles.title_amenities}>Comodidades</h1>
      <p className={styles.text_amenities}>
        Aproveite nossas comodidades de alto nível, projetadas para melhorar sua
        estadia.
      </p>

      <div className={styles.container_box_amenities}>
        <div className={styles.box_amenities}>
          <h1 className={styles.title_box_amenities}>Spa e Bem-estar</h1>
          <p className={styles.text_box_amenities}>
            Desfrute de coquetéis exclusivos e vinhos selecionados no nosso
            sofisticado bar lounge, o ambiente perfeito para relaxar após um dia
            intenso.
          </p>
          <button className={styles.btn_amenities}>Explore Mais</button>
        </div>
        <div className={styles.box_amenities}>
          <h1 className={styles.title_box_amenities}>Bar Lounge</h1>
          <p className={styles.text_box_amenities}>
            Revitalize corpo e mente no nosso luxuoso spa, com tratamentos
            relaxantes, sauna e massagens personalizadas para uma experiência de
            bem-estar incomparável.
          </p>
          <button className={styles.btn_amenities}>Explore Mais</button>
        </div>
        <div className={styles.box_amenities}>
          <h1 className={styles.title_box_amenities}>Transfer Privativo</h1>
          <p className={styles.text_box_amenities}>
            Nosso serviço de transfer privativo garante uma chegada e partida
            sem preocupações, com conforto e pontualidade, para que sua
            experiência comece e termine em grande estilo.
          </p>
          <button className={styles.btn_amenities}>Explore Mais</button>
        </div>
      </div>

      <button className={styles.btn_all_amenities}>Ver Todos</button>
    </section>
  );
}
