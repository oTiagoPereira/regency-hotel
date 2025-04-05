import styles from "./navBar.module.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.navegation_left}>
          <ul className={styles.list_nav}>
            <li className={styles.li_nav}>
              <Link to={"/"} className={styles.link_nav}>
                Home
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'/hospedagem'} className={styles.link_nav}>
                Hospedagem
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'/restaurante'} className={styles.link_nav}>
                Restaurante
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'/saiba-mais'} className={styles.link_nav}>
                Saiba Mais
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.logo_center}>
          <Link to={'/'} className={styles.link_logo}>
            <img src={logo} alt="logo" className={styles.img_logo} />
          </Link>
        </div>
        <div className={styles.navegation_right}>
          <ul className={styles.list_nav}>
            <li className={styles.li_nav}>
              <Link to={'/eventos'} className={styles.link_nav}>
                Eventos
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'promocoes'} className={styles.link_nav}>
                Promoções
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'/contatos'} className={styles.link_nav}>
                Contato
              </Link>
            </li>
            <li className={styles.li_nav}>
              <Link to={'/login'} className={styles.link_nav}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
