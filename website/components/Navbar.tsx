"use client";

import Image from "next/image";
import { useState } from "react";
const navItems = [
 { label: "Anasayfa", href: "/" },
{ label: "Hizmetlerimiz", href: "/#hizmetler" },
{ label: "Şubelerimiz", href: "/#subelerimiz" },
 { label: "Fiyatlar", href: "/#fiyatlar" },
 { label: "İletişim", href: "/#iletisim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
      <a href="#" className="navbar-logo" onClick={closeMenu}>
  <Image
   src="/images/default.svg"
    alt="Hasel Kuru Temizleme"
    width={72}
    height={72}
    priority
  />
</a>

        <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

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
