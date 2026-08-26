import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Kuru Temizleme",
    description:
      "Günlük kıyafetlerden özel giysilere kadar profesyonel kuru temizleme hizmeti.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=85",
    link: "/hizmetler/kuru-temizleme",
  },
  {
    number: "02",
    title: "Koltuk Yıkama",
    description:
      "Koltuklarınız için derinlemesine, hijyenik ve profesyonel temizlik hizmeti.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    link: "/hizmetler/koltuk-yikama",
  },
  {
    number: "03",
    title: "Halı Yıkama",
    description:
      "Halılarınız için hijyenik, özenli ve profesyonel yıkama hizmeti.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85",
    link: "/hizmetler/hali-yikama",
  },
  {
    number: "04",
    title: "Ev Tekstili",
    description:
      "Perde, yorgan, battaniye ve minderleriniz için özel bakım ve temizlik.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    link: "/hizmetler/ev-tekstili",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <p className="section-label">HİZMETLERİMİZ</p>

          <h2>
            İhtiyacınız olan
            <br />
            temizlik hizmeti EM&apos;de.
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.link}
              className="service-card"
            >
              <article>
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} hizmeti`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="service-image-element"
                  />

                  <div className="service-image-overlay" />

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-link">
                    Detayları Gör
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}