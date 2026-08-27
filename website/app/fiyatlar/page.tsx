"use client";

import { useState } from "react";
import PriceCard from "@/components/PriceCard";

const priceCategories = [
  {
    title: "Kuru Yıkama",
    image: "/images/services/dry-cleaning/dry-cleaning.jpg",
    items: [
      { name: "2 Parça Takım Elbise", price: "500 ₺" },
      { name: "3 Parça Takım Elbise", price: "650 ₺" },
      { name: "Smokin", price: "800 ₺" },
      { name: "Ceket", price: "300 ₺" },
      { name: "Pantolon Kumaş", price: "200 ₺" },
      { name: "Kot Pantolon", price: "200 ₺" },
      { name: "Gömlek", price: "200 ₺" },
      { name: "Yelek", price: "200 ₺" },
      { name: "Tshirt", price: "150 ₺" },
      { name: "Kazak", price: "200 ₺" },
      { name: "Mont", price: "400 ₺" },
      { name: "Palto", price: "500 ₺" },
      { name: "Kaban", price: "450 ₺" },
      { name: "Kayak Montu", price: "700 ₺" },
      { name: "Kayak Pantolonu", price: "300 ₺" },
      { name: "Motorcu Mont", price: "700 ₺" },
      { name: "Hırka", price: "300 ₺" },
      { name: "Şort", price: "150 ₺" },
      { name: "Pijama", price: "150 ₺" },
      { name: "İç Çamaşırı", price: "50 ₺" },
      { name: "Çorap", price: "25 ₺" },
      { name: "Eldiven", price: "50 ₺" },
      { name: "Yağmurluk", price: "400 ₺" },
      { name: "Elbise", price: "500 ₺" },
      { name: "Etek", price: "200 ₺" },
      { name: "Bluz", price: "200 ₺" },
      { name: "İpek Bluz", price: "300 ₺" },
      { name: "İpek Elbise", price: "1.000 ₺" },
      { name: "Abiye", price: "1.000 ₺" },
      { name: "Gece Elbisesi", price: "800 ₺" },
      { name: "Pardesü", price: "500 ₺" },
      { name: "Gelinlik", price: "2.000 ₺" },
    ],
  },

  {
    title: "Koltuk Yıkama",
    image:
      "/images/services/dry-cleaning/koltuk-yikama/koltuk-yikama.jpg",
    items: [
      {
        name: "Standart Koltuk Takımı Mindersiz & Kırlentsiz",
        price: "3.500 ₺",
      },
      {
        name: "Oturma Yeri Minderli Koltuk Takımı",
        price: "4.200 ₺",
      },
      {
        name: "Sırt Yeri Minderli Koltuk Takımı",
        price: "4.200 ₺",
      },
      {
        name: "Oturma ve Sırt Minderli Koltuk Takımı",
        price: "4.900 ₺",
      },
      { name: "Kanepe", price: "1.500 ₺" },
      { name: "Minderli Kanepe", price: "2.000 ₺" },
      { name: "Mindersiz Çift Kişilik Koltuk", price: "1.400 ₺" },
      { name: "Minderli Çift Kişilik Koltuk", price: "1.800 ₺" },
      {
        name: "Mindersiz Mini Köşe Takımı Puf Hariç",
        price: "3.000 ₺",
      },
      {
        name: "Minderli Mini Köşe Takımı Puf Hariç",
        price: "3.900 ₺",
      },
      {
        name: "Mindersiz Salon Köşe Takımı Puf Hariç",
        price: "4.200 ₺",
      },
      {
        name: "Minderli Salon Köşe Takımı Puf Hariç",
        price: "5.500 ₺",
      },
      { name: "Tek Kişilik Yatak 90×190 cm", price: "2.000 ₺" },
      { name: "Çift Kişilik Yatak 160×200 cm", price: "2.500 ₺" },
      { name: "Kral Yatak 200×200 cm", price: "3.000 ₺" },
      { name: "Sandalye", price: "300 ₺" },
    ],
  },

  {
    title: "Halı Yıkama",
    image: "/images/services/hali-yikama/hali-yikama.jpg",
    items: [
      { name: "Jel Taban Kaymaz Halı", price: "100 ₺/m²" },
      { name: "Klasik Halı", price: "120 ₺/m²" },
      { name: "Akrilik Halı", price: "130 ₺/m²" },
      { name: "Shaggy Halı", price: "130 ₺/m²" },
      { name: "Sisal Halı", price: "130 ₺/m²" },
      { name: "Jüt Halı", price: "130 ₺/m²" },
      { name: "Viskon Halı", price: "130 ₺/m²" },
      { name: "Nepal Halı", price: "150 ₺/m²" },
      { name: "Peluş Halı", price: "150 ₺/m²" },
      { name: "Patchwork Halı", price: "200 ₺/m²" },
      { name: "Step Shaggy Halı", price: "250 ₺/m²" },
      { name: "Yün Halı", price: "250 ₺/m²" },
      { name: "El Dokuma Halı", price: "250 ₺/m²" },
      { name: "Bambu Halı", price: "250 ₺/m²" },
      { name: "Hereke / Isparta Halı", price: "250 ₺/m²" },
      { name: "Deri Halı", price: "400 ₺/m²" },
      { name: "İpek Halı", price: "500 ₺/m²" },
      { name: "İran / Afgan / Çin Halısı", price: "500 ₺/m²" },
      { name: "Antika Halı", price: "650 ₺/m²" },
    ],
  },

  {
    title: "Ev Tekstili",
    image: "/images/services/ev-tekstili/ev-tekstili.jpg",
    items: [
      { name: "Battaniye", price: "700 ₺" },
      { name: "Çarşaf Takımı", price: "800 ₺" },
      { name: "Havlu Büyük", price: "100 ₺" },
      { name: "Havlu Küçük", price: "50 ₺" },
      { name: "Perde", price: "100 ₺" },
      { name: "Perde Double", price: "150 ₺" },
      { name: "Perde Tül", price: "50 ₺" },
      { name: "Yastık", price: "300 ₺" },
      { name: "Yastık Kaztüyü / Kuştüyü", price: "700 ₺" },
      { name: "Yatak Örtüsü", price: "700 ₺" },
      { name: "Yorgan", price: "700 ₺" },
      { name: "Yorgan Kaztüyü", price: "1.500 ₺" },
      { name: "Yorgan Pamuk", price: "1.000 ₺" },
      { name: "Yorgan Yün", price: "1.000 ₺" },
    ],
  },
];

export default function FiyatlarPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setOpenCategory((current) =>
      current === title ? null : title
    );
  };

  return (
    <main className="prices-page">
      <section className="prices-hero">
        <div className="prices-container">
          <p className="section-label">FİYATLAR</p>

          <h1>
            Hizmetlerimiz
            <br />
            ve fiyatlarımız.
          </h1>

          <p>
            Hizmetlerimizi seçerek fiyat listelerini
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <section className="prices-section">
        <div className="prices-container">
          <div
            className={`prices-grid ${
              openCategory ? "has-open-card" : ""
            }`}
          >
            {priceCategories.map((category) => (
              <PriceCard
                key={category.title}
                title={category.title}
                image={category.image}
                items={category.items}
                isOpen={openCategory === category.title}
                onToggle={() => handleToggle(category.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}