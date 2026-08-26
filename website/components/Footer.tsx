export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            HASEL KURU TEMİZLEME
          </a>

          <p>
            Profesyonel temizlik ve bakım hizmetleri.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <span>MENÜ</span>

            <a href="/">
              Ana Sayfa
            </a>

            <a href="/#hizmetler">
              Hizmetler
            </a>

            <a href="/#neden-em">
              Neden EM?
            </a>

            <a href="/#iletisim">
              İletişim
            </a>
          </div>

          <div>
            <span>HİZMETLER</span>

            <a href="/hizmetler/kuru-temizleme">
              Kuru Temizleme
            </a>

            <a href="/hizmetler/utuleme">
              Ütüleme
            </a>

            <a href="/hizmetler/ev-tekstili">
              Ev Tekstili
            </a>

            <a href="/hizmetler/hali-yikama">
              Halı Yıkama
            </a>

            <a href="/hizmetler/lostra">
              Lostra
            </a>

            <a href="/hizmetler/canta-temizleme">
              Çanta Temizleme
            </a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Hasel Kuru Temizleme. Tüm hakları saklıdır.
        </p>

        <a href="#iletisim">
          İletişime Geç →
        </a>

      </div>
    </footer>
  );
}