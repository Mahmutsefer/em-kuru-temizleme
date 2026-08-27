"use client";

import dynamic from "next/dynamic";

const MapContent = dynamic(
  () => import("./MapContent"),
  {
    ssr: false,
    loading: () => (
      <div className="branch-map-loading">
        Harita yükleniyor...
      </div>
    ),
  }
);

export default function BranchMap() {
  return <MapContent />;
}