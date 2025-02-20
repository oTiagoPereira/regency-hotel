import styles from "./roomsSection.module.css";

export default function RoomsSection() {
  return (
    <section className={styles.container_rooms}>
      <h1 className={styles.title_rooms}>Nossas Suites</h1>
      <p className={styles.text_rooms}>
        As acomodações do Regency Heights Hotel oferecem luxo e conforto, com
        design elegante e serviços exclusivos, para uma estadia memorável.
      </p>

      <div className={styles.container_box_rooms}>
        <div className={styles.box_rooms}>
          <h1 className={styles.title_box_rooms}>Suíte Premium</h1>
          <p className={styles.description_box_rooms}>
            Experimente o máximo de elegância e conforto na Suíte Premium, com
            design sofisticado, vistas deslumbrantes e comodidades exclusivas
            para uma estadia inesquecível.
          </p>
          <button className={styles.btn_rooms}>Explore Mais</button>
        </div>
        <div className={styles.box_rooms}>
          <h1 className={styles.title_box_rooms}>Suíte Executivo</h1>
          <p className={styles.description_box_rooms}>
            Projetada para o viajante exigente, a Suíte Executiva combina
            funcionalidade e luxo, oferecendo um espaço refinado para trabalhar
            e relaxar com total privacidade.
          </p>
          <button className={styles.btn_rooms}>Explore Mais</button>
        </div>
        <div className={styles.box_rooms}>
          <h1 className={styles.title_box_rooms}>Suíte Família</h1>
          <p className={styles.description_box_rooms}>
            A Suíte Família oferece amplo espaço e conforto para todos, com
            áreas separadas para descanso e lazer, garantindo uma estadia
            perfeita para toda a família.
          </p>
          <button className={styles.btn_rooms}>Explore Mais</button>
        </div>
      </div>

      <button className={styles.btn_all_rooms}>Ver Todos</button>
    </section>
  );
}
