"use client";

import { useState } from "react";
import PriceCard from "@/components/PriceCard";

const priceCategories = [
  {
    title: "Kuru Yıkama",
    image: "/images/services/dry-cleaning/dry-cleaning.jpg",
    items: [
      
      { name: "Takım Elbise", price: "900 ₺" },
      { name: "Ceket", price: "500 ₺" },
      { name: "Pantolon", price: "400 ₺" },
      { name: "Gömlek", price: "300 ₺" },
      { name: "Tshirt", price: "300 ₺" },
      { name: "Kazak", price: "300" },
      { name: "Mont", price: "500 - 700  ₺ arası" },
      { name: "Deri Mont", price: "2520 - 3500  ₺ arası" },
      { name: "Güderi", price: "2520 - 3500  ₺ arası" },
      { name: "Peloş Mont", price: "800 ₺" },
      { name: "Anorak ", price: "500 - 700  ₺ arası" },
      { name: "Palto", price: "800 ₺" },
      { name: "Pardesü", price: "800 ₺" },
      { name: "Panço", price: "500 ₺" },
      { name: "Ferace", price: "600 ₺" },
      { name: "Napa ", price: "2500 - 3500 ₺ arası" },
      { name: "Kaban", price: "800 ₺" },
      { name: "Kaz Tüyü Kaban", price: "1200 - 1500 ₺ arası" },
      { name: "Motorcu Mont", price: "1000 ₺" },
      { name: "Motorcu Pantolnu", price: "600 ₺" },
      { name: "Hırka", price: "400 ₺" },
      { name: "Süet", price: "2500 - 3500 ₺ arası" },
      { name: "Süveter", price: "250 ₺" },
      { name: "kıravar", price: "400 ₺" },
      { name: "Şal", price: "300 ₺" },
      { name: "Eşarp", price: "300 ₺" },
      { name: "Bermuda", price: "300 ₺" },
      { name: "Şort", price: "400 ₺" },
      { name: "Trençkot", price: "800 ₺" },
      { name: "Elbise", price: "500 ₺" },
      { name: "Etek", price: "300 - 500 ₺ arası" },
      { name: "Bluz", price: "300 ₺" },
      { name: "Tulum", price: "700 - 1000 ₺ arası" },
      { name: "İpek Bluz", price: "500 ₺" },
      { name: "İpek Elbise", price: "1.000 ₺" },
      { name: "Cübbe", price: "600 ₺" },
      { name: "Bornoz", price: "600 ₺" },
      { name: "Abiye Elbise", price: "1300 ₺den başlıyor" },
      { name: "Bayan Elbisesi", price: "500 ₺" },
      { name: "Gelinlik", price: "4.000 ₺" },
    ],
  },

  {
  title: "Ütüleme",
 image: "/images/services/Ütüleme/Utuleme.jpg",
  items: [
    { name: "Takım Elbise", price: "450 ₺" },
    { name: "Ceket", price: "250 ₺" },
    { name: "Pantolon", price: "200 ₺" },
    { name: "Gömlek", price: "150 ₺" },
    { name: "Tshirt", price: "150 ₺" },
    { name: "Kazak", price: "150 ₺" },
    { name: "Palto", price: "400 ₺" },
    { name: "Panço", price: "250 ₺" },
    { name: "Ferace", price: "300 ₺" },
    { name: "Kaban", price: "400 ₺" },
    { name: "Hırka", price: "200 ₺" },
    { name: "Süveter", price: "100 ₺" },
    { name: "kıravar", price: "100 ₺" },
    { name: "Şal", price: "150 ₺" },
    { name: "Eşarp", price: "150 ₺" },
    { name: "Bermuda", price: "150 ₺" },
    { name: "Şort", price: "200 ₺" },
    { name: "Trençkot", price: "400 ₺" },
    { name: "Bayan Elbise", price: "500 ₺" },
    { name: "Bluz", price: "150 ₺" },
    { name: "İpek Bluz", price: "250 ₺" },
    { name: "Pardesü", price: "400 ₺" },
    { name: "Cübbe", price: "300 ₺" },
   
  ],
},


 {
    title: "Ev Tekstili",
    image: "/images/services/ev-tekstili/ev-tekstili.jpg",
    items: [
      { name: "Battaniye", price: "900 ₺" },
      { name: "Yorgan Elyaf", price: "900 ₺" },
      { name: "Kaz Tüyü Yorgan", price: "1.500 ₺" },
      { name: "Yorgan Yün", price: "1.200 ₺" },
      { name: "Yatak Örtüsü Takımı", price: "1200 ₺" },
      { name: "Nevresim Takımı", price: "1200 ₺" },
      { name: "Yastık Elyaf", price: "600 ₺" },
      { name: "Yastık Yün", price: "800 ₺" },
      { name: "Kaz Tüyü Yastık", price: "800 ₺" },
      { name: "Yatak Koruyucu Alez", price: "900 - 1500 ₺ arası " },
      { name: "Pike", price: "700 ₺" },   
      { name: "Tül Perde", price: "70 ₺" },
      { name: "Fon Perde (Astarsız)", price: "200 ₺" },
      { name: "Fon Perde (Astarlı)", price: "250 ₺" },
      { name: "Srop Perde", price: "150-0250 ₺ arası" },
      { name: "Güneşlik", price: "150 ₺" },
      
     
    ],
  },

  
 {
  title: "Koltuk Yıkama",
  image:
    "/images/services/dry-cleaning/koltuk-yikama/koltuk-yikama.jpg",
  items: [
    {
      name: "Koltuk Takımı",
      price: "2700 ₺'den başlıyor",
    },
  ],
},

  {
    title: "Halı Yıkama",
    image: "/images/services/hali-yikama/hali-yikama.jpg",
    items: [
      { name: "Makine Halısı", price: "150 ₺/m²" },
      { name: "Yün Halılar", price: "400 ₺/m²" },
      { name: "Shaqqy Halı", price: "200 ₺/m²" },
      { name: "İpek Halı", price: "800 ₺/m²" },
      { name: "Bambu Halı", price: "400 ₺/m²" },
      { name: "İpek Bambu Halı", price: "500 ₺/m²" },
      { name: "Yün Bambu Halı", price: "500 ₺/m²" },
      { name: "Peloş Halı", price: "200 ₺/m²" },
  
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