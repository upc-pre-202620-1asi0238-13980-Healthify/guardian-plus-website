import Logo from "../../common/Logo/Logo";
import { NAV_ITEMS } from "../../../config/navigation";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo variant="dark" />
            <p className="site-footer__tagline">Cuidar a la distancia. Sentirse cerca.</p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="site-footer__nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a className="site-footer__link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>© {CURRENT_YEAR} Guardian+. Todos los derechos reservados.</p>
          <p>
            <a className="site-footer__link" href="#privacy">
              Privacidad
            </a>
            {" · "}
            <a className="site-footer__link" href="#terms">
              Términos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
