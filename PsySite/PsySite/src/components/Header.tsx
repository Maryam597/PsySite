import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* BOUTON BURGER */}
      <button
        className={styles.burger}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAVBAR */}
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        {/* CROIX */}
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        {/* LIENS */}
        <ul className={styles.ul}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/tarifs" onClick={handleLinkClick}>
              Tarifs
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;