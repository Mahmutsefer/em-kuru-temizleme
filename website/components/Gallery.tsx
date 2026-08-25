import Image from "next/image";

const galleryItems = [
  {
    title: "Kuru Temizleme",
    category: "Profesyonel Bakım",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Ütüleme",
    category: "Kusursuz Görünüm",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Ev Tekstili",
    category: "Özel Bakım",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Halı Yıkama",
    category: "Hijyenik Temizlik",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Lostra",
    category: "Ayakkabı & Deri Bakımı",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Çanta Temizleme",
    category: "Profesyonel Temizlik",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <div>
            <p className="section-label">EM&apos;DEN KARELER</p>

            <h2>
              Özenli iş,
              <br />
              temiz sonuç.
            </h2>
          </div>

          <p>
            Farklı ürün ve kumaşlara özel profesyonel
            temizlik ve bakım hizmetlerimizden bazıları.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.title}>

              <Image
                src={item.image}
                alt={`${item.title} - EM Kuru Temizleme`}
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <div>
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>
                </div>

                <span className="gallery-arrow">
                  ↗
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}