"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo" onClick={closeMenu}>
          EM KURU TEMİZLEME
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            Ana Sayfa
          </a>

          <a href="/#hizmetler" onClick={closeMenu}>
            Hizmetler
          </a>

          <a href="/#neden-em" onClick={closeMenu}>
            Neden EM?
          </a>

          <a href="/#iletisim" onClick={closeMenu}>
            İletişim
          </a>

          <a
            href="tel:+905000000000"
            className="mobile-nav-button"
            onClick={closeMenu}
          >
            Bizi Arayın
          </a>
        </nav>

        <a href="#iletisim" className="nav-button">
          İletişime Geç
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}