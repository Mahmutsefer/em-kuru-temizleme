"use client";

import { useState } from "react";

type Item = {
  title: string;
  image: string;
  price?: string;
};

export default function DryCleaningGallery({
  items,
}: {
  items: Item[];
}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="dry-cleaning-items">
      {items.map((item) => {
        const isSelected = selectedItem === item.title;

        return (
          <div
            className={`dry-cleaning-item ${
              isSelected ? "selected" : ""
            }`}
            key={item.title}
            onClick={() =>
              setSelectedItem(isSelected ? null : item.title)
            }
          >
            <div className="dry-cleaning-item-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="dry-cleaning-item-info">
              <h3>{item.title}</h3>

              <div className="dry-cleaning-item-price">
                {item.price || "100 TL"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}