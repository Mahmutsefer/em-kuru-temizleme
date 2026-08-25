import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="section-label">EM KURU TEMİZLEME</p>

        <h1>Sayfa bulunamadı.</h1>

        <p>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <Link href="/" className="not-found-button">
          Ana Sayfaya Dön →
        </Link>
      </div>
    </main>
  );
}