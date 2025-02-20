import styles from "./navBar.module.css";
import logo from "../../../assets/logo.svg";
export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.navegation_left}>
          <ul className={styles.list_nav}>
            <li className={styles.li_nav}>
              <a href="/" className={styles.link_nav}>
                Home
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Hospedagem
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Restaurante
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Saiba Mais
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.logo_center}>
          <a href="/" className={styles.link_logo}>
            <img src={logo} alt="logo" className={styles.img_logo} />
          </a>
        </div>
        <div className={styles.navegation_right}>
          <ul className={styles.list_nav}>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Eventos
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Promoções
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Contato
              </a>
            </li>
            <li className={styles.li_nav}>
              <a href="#" className={styles.link_nav}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
