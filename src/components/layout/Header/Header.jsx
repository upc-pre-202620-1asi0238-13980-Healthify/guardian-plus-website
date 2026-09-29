import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../common/Logo/Logo";
import { NAV_ITEMS, SECTION_IDS } from "../../../config/navigation";
import useActiveSection from "../../../hooks/useActiveSection";
import useScrolledPast from "../../../hooks/useScrolledPast";
import "./Header.css";

const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const SCROLL_THRESHOLD = 24;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS);
  const isScrolled = useScrolledPast(SCROLL_THRESHOLD);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href={`#${SECTION_IDS.top}`} aria-label="Guardian+, ir al inicio" onClick={closeMenu}>
          <Logo />
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id}>
                  <a
                    className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
