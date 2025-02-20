import styles from "./eventsAndActivities.module.css";

export default function EventsAndActivities() {
  return (
    <section className={styles.container_events}>
      <h1 className={styles.title_events}>Eventos & Atividades</h1>
      <p className={styles.text_events}>
        Descubra eventos, atividades e passeios emocionantes para melhorar sua
        estadia no hotel.
      </p>

      <div className={styles.container_box_events}>
        <div className={styles.box_events}>
          <h1 className={styles.title_box_events}>Música ao vivo</h1>
          <p className={styles.text_box_events}>
            Aproveite apresentações de música ao vivo de artistas talentosos
            todos os fins de semana.
          </p>
          <button className={styles.btn_events}>Explore Mais</button>
        </div>
        <div className={styles.box_events}>
          <h1 className={styles.title_box_events}>Visitas guiadas</h1>
          <p className={styles.text_box_events}>
            Explore a cidade com nossos guias experientes em excursões guiadas
            exclusivas.
          </p>
          <button className={styles.btn_events}>Explore Mais</button>
        </div>
        <div className={styles.box_events}>
          <h1 className={styles.title_box_events}>Aventuras ao ar livre</h1>
          <p className={styles.text_box_events}>
            Embarque em emocionantes aventuras ao ar livre, como trilhas para
            caminhadas e ciclismo.
          </p>
          <button className={styles.btn_events}>Explore Mais</button>
        </div>
      </div>

      <button className={styles.btn_all_events}>Ver Todos</button>
    </section>
  );
}
