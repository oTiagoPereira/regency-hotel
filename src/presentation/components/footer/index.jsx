import styles from "./footer.module.css";
import IconFacebook from "../../../assets/facebook.svg";
import IconInstagram from "../../../assets/instagram.svg";
import IconYoutube from "../../../assets/youtube.svg";
import IconX from "../../../assets//x.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_footer}>
        <div className={styles.navegation}>
          <h3 className={styles.title_footer}>Navegação Rápida</h3>
          <ul className={styles.list_footer}>
            <li className={styles.li_footer}>
              <a href="/" className={styles.link_footer}>
                Home
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Acomodações
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Eventos
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Hospegagem
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Promoções
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Sobre Nós
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contact_info}>
          <h3 className={styles.title_footer}>Informações de Contato</h3>
          <ul className={styles.list_footer}>
            <li className={styles.li_footer}>
              <a href="tel:+5511999999999" className={styles.link_footer}>
                +55 (11) 99999_9999
              </a>
            </li>
            <li className={styles.li_footer}>
              <a
                href="mailto:regencyhotel@gmail.com"
                className={styles.link_footer}
              >
                Email: regencyhotel@gmail.com
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Rua Regency Blvd, 123
              </a>
            </li>
          </ul>
          <div className={styles.icons_social}>
            <a href="#" className={styles.link_social}>
              <img
                src={IconInstagram}
                alt="Icon Instagram"
                className={styles.img_icon_social}
              />
            </a>
            <a href="#" className={styles.link_social}>
              <img
                src={IconFacebook}
                alt="Icon Facebook"
                className={styles.img_icon_social}
              />
            </a>
            <a href="#" className={styles.link_social}>
              <img
                src={IconYoutube}
                alt="Icon Youtube"
                className={styles.img_icon_social}
              />
            </a>
            <a href="#" className={styles.link_social}>
              <img
                src={IconX}
                alt="Icon X"
                className={styles.img_icon_social}
              />
            </a>
          </div>
        </div>
        <div className={styles.policies}>
          <h3 className={styles.title_footer}>Políticas</h3>
          <ul className={styles.list_footer}>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Políticas de cancelamento e reservas
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Política de privacidade
              </a>
            </li>
            <li className={styles.li_footer}>
              <a href="#" className={styles.link_footer}>
                Termos e condições
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.languages}>
          <h3 className={styles.title_footer}>Idiomas</h3>
        </div>
        <div className={styles.newsletter}>
          <h3 className={styles.title_footer}>Receba Novidades Exclusivas</h3>
          <form action="" className={styles.form_footer}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input_footer}
            />
            <button type="submit" className={styles.btn_footer}>
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className={styles.copyright}>
        <h3 className={styles.title_copyright}>
          © Regency Hotel. Todos os direitos reservados.
        </h3>
        <a
          href="https://github.com/oTiagoPereira"
          target="_blank"
          className={styles.link_copyright}
        >
          Tiago Pereira
        </a>
      </div>
    </footer>
  );
}
