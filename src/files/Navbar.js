import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  ["home", "Home"],
  ["products", "Collection"],
  ["premium", "The Reserve"],
  ["blog", "Journal"],
];

const Navbar = ({ scrolled, onNavigate, bagCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const navigate = (section) => {
    setMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className={`${styles.container} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.inner}>
        <button className={styles.brand} onClick={() => navigate("home")} aria-label="Kinfusion home">
          <span className={styles.brandMark}>K</span>
          <span>
            <strong>Kinfusion</strong>
            <small>London · MMXXIII</small>
          </span>
        </button>

        <nav className={styles.navigation} aria-label="Primary navigation">
          {navItems.map(([section, label]) => (
            <button key={section} onClick={() => navigate(section)}>{label}</button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.bag} aria-label={`Shopping bag with ${bagCount} ${bagCount === 1 ? "item" : "items"}`}>
            Bag <span>{String(bagCount).padStart(2, "0")}</span>
          </button>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={styles.mobileNavigation} aria-label="Mobile navigation">
        {navItems.map(([section, label], index) => (
          <button key={section} onClick={() => navigate(section)}>
            <span>0{index + 1}</span>{label}
          </button>
        ))}
        <div className={styles.mobileMeta}>Small-batch coffee · roasted in London</div>
      </nav>
    </header>
  );
};

export default Navbar;
