"use client";

const branches = [
  {
    name: "Hasel Kuru Temizleme Dikilitaş",
    address: "Dikilitaş, Emirhan Cd, No:81, 34349 Beşiktaş / İstanbul",
    phone: "0212 327 45 23",
    hours: "08:00 - 20:00",
    maps: "https://share.google/50vm4f2NE6he75JsW",
  },
  {
    name: "Hasel Kuru Temizleme Fulya",
    address: "Fulya, Ortaklar Cd, Öke Ap. 22/D, 34394 Şişli / İstanbul",
    phone: "0212 288 28 82",
    hours: "08:00 - 21:00",
    maps: "https://share.google/IBN5LMQdgWdlwWzn1",
  },
  {
    name: "TGS Halı Yıkama",
    address: "Paşa, Çakıl Sk. No:1/B, 34379 Şişli / İstanbul",
    phone: "0532 326 70 71",
    hours: "08:00 - 21:00",
    maps: "https://share.google/dPianRUxSaf0omX4p",
  },
];

export default function Branches() {
  return (
    <section className="branches-section" id="subelerimiz">
      <div className="branches-container">

        <div className="branches-heading">
          <p className="section-label">ŞUBELERİMİZ</p>

          <h2>
            Size en yakın
            <br />
            <span>Hasel şubesini bulun.</span>
          </h2>

          <p>
            Size en yakın şubemizi ziyaret edin.
            Adres, telefon ve çalışma saatlerimizi
            aşağıda bulabilirsiniz.
          </p>
        </div>

        <div className="branches-grid">
          {branches.map((branch) => (
            <div className="branch-card" key={branch.name}>

              <div className="branch-card-top">
                <div className="branch-icon">📍</div>

                <h3>{branch.name}</h3>
              </div>

              <div className="branch-info">

                <div className="branch-info-row">
                  <span>Adres</span>
                  <p>{branch.address}</p>
                </div>

                <div className="branch-info-row">
                  <span>Telefon</span>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="branch-info-row">
                  <span>Çalışma Saatleri</span>
                  <p>{branch.hours}</p>
                </div>

              </div>

             <div className="branch-actions">
  <a
    href={`tel:${branch.phone.replace(/\s/g, "")}`}
    className="branch-call-button"
  >
    📞 Ara
  </a>

  <a
    href={branch.maps}
    target="_blank"
    rel="noopener noreferrer"
    className="branch-directions-button"
  >
    📍 Yol Tarifi
  </a>
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}