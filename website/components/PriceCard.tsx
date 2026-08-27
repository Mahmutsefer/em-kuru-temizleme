"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
type PriceItem = {
  name: string;
  price: string;
};

type PriceCardProps = {
  title: string;
  image: string;
  items: PriceItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function PriceCard({
  title,
  image,
  items,
  isOpen,
  onToggle,
}: PriceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [isOpen]);

  return (
    <div
  ref={cardRef}
  className={`price-card ${isOpen ? "open" : ""}`}
>
      <button
        type="button"
        className="price-card-header"
        onClick={onToggle}
      >
        <div className="price-card-image">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className="price-card-title">
          <h2>{title}</h2>

          <span className="price-card-arrow">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      <div className={`price-card-table ${isOpen ? "visible" : ""}`}>
        <div className="price-table">
          <div className="price-table-header">
            <span>Ürün</span>
            <span>Fiyat</span>
          </div>

          {items.map((item) => (
            <div className="price-table-row" key={item.name}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}