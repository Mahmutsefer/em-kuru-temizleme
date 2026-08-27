import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       <div className="footer-brand">
  <a href="/" className="footer-logo">
    <Image
  src="/images/default.svg"
  alt="Hasel Kuru Temizleme"
  width={300}
  height={120}
/>
  </a>
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
              Neden HASEL?
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

            
            
            <a href="/hizmetler/hali-yikama">
              Halı Yıkama
            </a>


            <a href="/hizmetler/koltuk-yikama">
              Koltuk Yıkama
            </a>

            <a href="/hizmetler/ev-tekstili">
              Ev Tekstili
            </a>


          
                    </div>

          <div>
            <span>ŞUBELERİMİZ</span>

            <a href="#">
              Şube 1
            </a>

            <a href="#">
              Şube 2
            </a>

            <a href="#">
              Şube 3
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