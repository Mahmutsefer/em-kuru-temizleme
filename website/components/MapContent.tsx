"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const branches = [
  {
    name: "Hasel Kuru Temizleme Dikilitaş",
    address:
      "Dikilitaş, Emirhan Cd, No:81, 34349 Beşiktaş / İstanbul",
    position: [41.0548, 29.0065] as [number, number],
  },
  {
    name: "Hasel Kuru Temizleme Fulya",
    address:
      "Fulya, Ortaklar Cd, Öke Ap. 22/D, 34394 Şişli / İstanbul",
    position: [41.0668, 28.9958] as [number, number],
  },
  {
    name: "TGS Halı Yıkama",
    address:
      "Paşa, Çakıl Sk. No:1/B, 34379 Şişli / İstanbul",
    position: [41.0635, 28.9795] as [number, number],
  },
];

const branchIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapContent() {
  return (
    <div className="branch-map">
      <MapContainer
        center={[41.061, 28.995]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {branches.map((branch) => (
          <Marker
            key={branch.name}
            position={branch.position}
            icon={branchIcon}
          >
            <Popup>
              <strong>{branch.name}</strong>
              <br />
              {branch.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}