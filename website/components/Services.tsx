import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Kuru Temizleme",
    description:
      "Günlük kıyafetlerden özel giysilere kadar profesyonel kuru temizleme hizmeti.",
    image:
  "/images/services/dry-cleaning/dry-cleaning.jpg",
    link: "/hizmetler/kuru-temizleme",
  },
  {
    number: "02",
    title: "Koltuk Yıkama",
    description:
      "Koltuklarınız için derinlemesine, hijyenik ve profesyonel temizlik hizmeti.",
    image:
  "/images/services/dry-cleaning/koltuk-yikama/koltuk-yikama.jpg",
    link: "/hizmetler/koltuk-yikama",
  },
  {
    number: "03",
    title: "Halı Yıkama",
    description:
      "Halılarınız için hijyenik, özenli ve profesyonel yıkama hizmeti.",
    image:
  "/images/services/hali-yikama/hali-yikama.jpg",
    link: "/hizmetler/hali-yikama",
  },
  {
    number: "04",
    title: "Ev Tekstili",
    description:
      "Perde, yorgan, battaniye ve minderleriniz için özel bakım ve temizlik.",
    image:
  "/images/services/ev-tekstili/ev-tekstili.jpg",
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
            temizlik hizmeti Hasel Kuru Temizleme&apos;de.
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