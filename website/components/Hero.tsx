export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-label">
          EM KURU TEMİZLEME
        </p>

        <h1>
          Giysileriniz için
          <br />
          <span>özenli bakım.</span>
        </h1>

        <p className="hero-description">
          Kıyafetlerinizden ev tekstillerine kadar tüm
          ürünleriniz için profesyonel temizlik ve bakım
          hizmeti.
        </p>

        <div className="hero-actions">
          <a
            href="#hizmetler"
            className="hero-button hero-button-primary"
          >
            Hizmetlerimizi Keşfedin
            <span>→</span>
          </a>

          <a
            href="#iletisim"
            className="hero-button hero-button-secondary"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>KEŞFET</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}