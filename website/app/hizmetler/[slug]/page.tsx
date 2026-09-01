import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DryCleaningGallery from "@/components/DryCleaningGallery";


const services = {
  "kuru-temizleme": {
    title: "Kuru Temizleme",
    subtitle: "Giysileriniz için profesyonel ve özenli bakım.",
    description:
      "Kıyafetlerinizin kumaş ve ürün özelliklerine uygun profesyonel kuru temizleme hizmeti sunuyoruz.",
   image: "/images/services/dry-cleaning/dry-cleaning.jpg",

  points: [
  "Gömlek",
  "Pantolon",
  "Ceket",
  "Takım Elbise",
  "Kaban",
  "Mont",
  "Elbise",
  "Kazak",
  "Tişört",
  "Palto",
],

items: [
  {
    title: "Gömlek",
    image: "/images/services/dry-cleaning/shirt.jpg",
  },
  {
    title: "Pantolon",
    image: "/images/services/dry-cleaning/trousers.jpg",
  },
  {
    title: "Ceket",
    image: "/images/services/dry-cleaning/blazer.jpg",
  },
  {
    title: "Takım Elbise",
    image: "/images/services/dry-cleaning/suit.jpg",
  },
  {
    title: "Kaban",
    image: "/images/services/dry-cleaning/coat.jpg",
  },
  {
    title: "Mont",
    image: "/images/services/dry-cleaning/jacket.jpg",
  },
  {
    title: "Elbise",
    image: "/images/services/dry-cleaning/dress.jpg",
  },
  {
    title: "Kazak",
    image: "/images/services/dry-cleaning/sweater.jpg",
  },
  {
    title: "Tişört",
    image: "/images/services/dry-cleaning/tshirt.jpg",
  },
  {
    title: "Palto",
    image: "/images/services/dry-cleaning/overcoat.jpg",
  },
],
},
  "koltuk-yikama": {
    title: "Koltuk Yıkama",
    subtitle: "Koltuklarınız için profesyonel ve hijyenik temizlik.",
    description:
      "Koltuklarınızın kumaş ve yapısına uygun profesyonel yıkama ve bakım hizmeti sunuyoruz.",
   image: "/images/services/dry-cleaning/koltuk-yikama/koltuk-yikama.jpg",
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
  "/images/services/hali-yikama/hali-yikama.jpg",
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
    items: [
  {
    title: "Perde",
    image: "/images/services/ev-tekstili/perde.jpg",
    price: "150₺",
  },
  {
    title: "Yorgan",
    image: "/images/services/ev-tekstili/yorgan.jpg",
    price: "200₺",
  },
  {
    title: "Battaniye",
    image: "/images/services/ev-tekstili/battaniye.jpg",
    price: "300₺",
  },
  {
    title: "Minder",
    image: "/images/services/ev-tekstili/minder.jpg",
    price: "400₺",
  },
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
      title: "Hizmet Bulunamadı | Hasel Kuru Temizleme",
      description: "Hasel Kuru Temizleme hizmet sayfası.",
    };
  }

  return {
    title: `${service.title} | Hasel Kuru Temizleme`,
    description: service.description,

    openGraph: {
      title: `${service.title} | Hasel Kuru Temizleme`,
      description: service.description,
      type: "website",
      locale: "tr_TR",
      siteName: "Hasel Kuru Temizleme",
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

      {/* HERO */}
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

          <p>HASEL KURU TEMİZLEME</p>

          <h1>{service.title}</h1>

          <p className="service-subtitle">
            {service.subtitle}
          </p>

        </div>
      </section>


      {/* SERVICE INFORMATION */}
    {/* SERVICE INFORMATION */}
{/* SERVICE INFORMATION */}

<section className="service-information">

{slug === "koltuk-yikama" && ( <div className="service-highlight"> <span className="service-highlight-mark">✓</span> <div> <h3>İşlem görmemiş lekelerde leke çıkarma garantisi.</h3> <p>
İşlem görmemiş lekeler için profesyonel leke çıkarma uygulaması
sunuyoruz. </p> </div> </div>
)}

{slug === "hali-yikama" && ( <div className="service-highlight"> <span className="service-highlight-mark">✓</span> <div> <h3>Yerinde halı yıkama hizmeti.</h3> <p>
Halılarınızı yerinizden almadan, profesyonel ekipmanlarımızla
bulunduğunuz yerde yıkıyoruz. Hızlı ve pratik bir temizlik hizmeti. </p> </div> </div>
)}

{(slug === "kuru-temizleme" || slug === "ev-tekstili") &&
"items" in service && ( <DryCleaningGallery
   items={service.items}
 />
)}

</section>

      {/* PROCESS */}
      <section className="service-process">

        <div>

          <p className="section-label">
            SÜRECİMİZ
          </p>

          <h2>
            Ürününüz bize ulaştığında.
          </h2>

          <div className="process-grid">

            <div>
              <span>01</span>

              <h3>İnceleme</h3>

              <p>
                Ürünün kumaşını, malzemesini ve bakım
                özelliklerini inceliyoruz.
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


      {/* CTA */}
      <section className="service-cta">

        <div>

          <p>HASEL KURU TEMİZLEME</p>

          <h2>
            Ürününüz için doğru bakımı seçin.
          </h2>

          <div>

           <a href="tel:+905069490031">
  Bizi Arayın
</a>

<a href="https://wa.me/905069490031">
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