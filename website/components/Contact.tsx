import BranchMap from "@/components/BranchMap";
export default function Contact() {
  return (
    <section id="iletisim" className="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">İLETİŞİM</p>

          <h2>
            Temizliğe
            <br />
            ihtiyacınız mı var?
          </h2>

          <p>
            Hizmetlerimiz hakkında bilgi almak, fiyat öğrenmek
            veya ürününüz için doğru bakım yöntemini öğrenmek
            için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

       <div className="contact-details">

  <div className="contact-item">
    <span>TELEFON</span>

    <a href="tel:+905069490031">
      +90 506 949 00 31
    </a>
  </div>

  <div className="contact-item">
    <span>WHATSAPP</span>

    <a
      href="https://wa.me/905069490031"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp'tan Yazın →
    </a>
  </div>

          <div className="contact-item">
            <span>ÇALIŞMA SAATLERİ</span>

            <p>
              Pazartesi – Cumartesi
              <br />
              09:00 – 19:00
            </p>
          </div>

          <div className="contact-item">
            <span>ADRES</span>

            <p>
              İstanbul, Türkiye
            </p>
          </div>

        </div>

        <BranchMap />

      </div>
    </section>
  );
}
