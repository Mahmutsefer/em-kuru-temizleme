"use client";

import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/hero/dry-cleaning-1.jpg",
    alt: "Profesyonel kuru temizleme hizmeti",
  },
  {
    src: "/images/hero/dry-cleaning-2.jpg",
    alt: "Profesyonel çamaşırhane ve kuru temizleme",
  },
  {
    src: "/images/hero/carpet-cleaning.jpg",
    alt: "Profesyonel halı yıkama hizmeti",
  },
  {
    src: "/images/hero/sofa-cleaning.jpg",
    alt: "Profesyonel koltuk yıkama hizmeti",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        {heroImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`hero-slide ${
              index === activeImage ? "hero-slide-active" : ""
            }`}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-label">
  HASEL KURU TEMİZLEME
</p>

        <h1>
          Tertemiz bir yaşam,
          <br />
          <span>Hasel Kuru Temizleme ile mümkün.</span>
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
