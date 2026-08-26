import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const services = {
  "kuru-temizleme": {
    title: "Kuru Temizleme",
    subtitle: "Giysileriniz için profesyonel ve özenli bakım.",
    description:
      "Kıyafetlerinizin kumaş ve ürün özelliklerine uygun profesyonel kuru temizleme hizmeti sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1800&q=85",
    points: [
      "Takım elbiseler",
      "Gömlek ve pantolonlar",
      "Elbiseler",
      "Mont ve kabanlar",
      "Özel kumaşlar",
      "Hassas giysiler",
    ],
  },

  "koltuk-yikama": {
    title: "Koltuk Yıkama",
    subtitle: "Koltuklarınız için profesyonel ve hijyenik temizlik.",
    description:
      "Koltuklarınızın kumaş ve yapısına uygun profesyonel yıkama ve bakım hizmeti sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85",
    points: [
      "Koltuk takımları",
      "Kanepe ve kanepeler",
      "Berjerler",
      "Sandalyeler",
      "Kumaş koltuklar",
      "Derinlemesine temizlik",
    ],
  },

  "hali-yikama": {
    title: "Halı Yıkama",
    subtitle: "Halılarınız için profesyonel temizlik.",
    description:
      "Halılarınızın yapısına ve özelliklerine uygun profesyonel yıkama ve bakım hizmeti.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1800&q=85",
    points: [
      "Makine halıları",
      "El dokuma halılar",
      "Hassas halılar",
      "Modern halılar",
      "Detaylı temizlik",
      "Profesyonel bakım",
    ],
  },

  "ev-tekstili": {
    title: "Ev Tekstili",
    subtitle: "Evinizdeki tekstil ürünleri için özel bakım.",
    description:
      "Perde, yorgan, battaniye ve minder gibi ev tekstili ürünleriniz için profesyonel temizlik ve bakım hizmeti.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=85",
    points: [
      "Perdeler",
      "Yorganlar",
      "Battaniyeler",
      "Minderler",
      "Özel kumaşlar",
      "Ev tekstili ürünleri",
    ],
  },
};

type ServiceSlug = keyof typeof services;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | EM Kuru Temizleme",
      description: "EM Kuru Temizleme hizmet sayfası.",
    };
  }

  return {
    title: `${service.title} | EM Kuru Temizleme`,
    description: service.description,

    openGraph: {
      title: `${service.title} | EM Kuru Temizleme`,
      description: service.description,
      type: "website",
      locale: "tr_TR",
      siteName: "EM Kuru Temizleme",
      images: [
        {
          url: service.image,
          width: 1800,
          height: 1200,
          alt: service.title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}



export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as ServiceSlug];

  if (!service) {
    return (
      <main className="service-not-found">
        <h1>Hizmet bulunamadı</h1>
        <Link href="/">Ana Sayfaya Dön</Link>
      </main>
    );
  }

  return (
  <>
    <Navbar />

    <main className="service-page">
      <section
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(15, 39, 33, 0.92),
            rgba(15, 39, 33, 0.55)
          ), url(${service.image})`,
        }}
      >
        <div className="service-hero-content">
          <Link href="/#hizmetler" className="back-link">
            ← Tüm Hizmetler
          </Link>

          <p>EM KURU TEMİZLEME</p>

          <h1>{service.title}</h1>

          <p className="service-subtitle">{service.subtitle}</p>
        </div>
      </section>

      <section className="service-information">
        <div className="service-information-grid">
          <div>
            <p className="section-label">HİZMETİMİZ</p>

            <h2>Özenli temizlik, profesyonel bakım.</h2>

            <p className="service-description">
              {service.description}
            </p>

            <a href="tel:+905000000000" className="service-button">
              Bizi Arayın →
            </a>
          </div>

          <div>
            <p className="section-label">Neler Yapıyoruz?</p>

            <div className="service-points">
              {service.points.map((point, index) => (
                <div key={point}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-process">
        <div>
          <p className="section-label">SÜRECİMİZ</p>

          <h2>Ürününüz bize ulaştığında.</h2>

          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>İnceleme</h3>
              <p>
                Ürünün kumaşını, malzemesini ve bakım özelliklerini
                inceliyoruz.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Temizlik</h3>
              <p>
                Ürüne uygun profesyonel temizlik yöntemini
                uyguluyoruz.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Kontrol</h3>
              <p>
                İşlem sonrasında ürünün son kontrolünü
                gerçekleştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div>
          <p>EM KURU TEMİZLEME</p>

          <h2>Ürününüz için doğru bakımı seçin.</h2>

          <div>
            <a href="tel:+905000000000">Bizi Arayın</a>

            <a href="https://wa.me/905000000000">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
   
    </main>

    <Footer />
  </>
  );
}