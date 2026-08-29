"use client";

const branches = [
  {
    name: "Hasel Kuru Temizleme Dikilitaş",
    address: "Dikilitaş, Emirhan Cd, No:81, 34349 Beşiktaş / İstanbul",
    phone: "0212 327 45 23",
    hours: "08:00 - 20:00",
  },
  {
    name: "Hasel Kuru Temizleme Fulya",
    address: "Fulya, Ortaklar Cd, Öke Ap. 22/D, 34394 Şişli / İstanbul",
    phone: "0212 288 28 82",
    hours: "08:00 - 21:00",
  },
  {
    name: "TGS Halı Yıkama",
    address: "Paşa, Çakıl Sk. No:1/B, 34379 Şişli / İstanbul",
    phone: "0532 326 70 71",
    hours: "08:00 - 21:00",
  },
];

const handleDirections = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  const userAgent = navigator.userAgent;

  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  if (isAndroid) {
    window.location.href =
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodedAddress +
      "&travelmode=driving";
    return;
  }

  if (isIOS) {
    const googleMapsUrl =
      "comgooglemaps://?daddr=" +
      encodedAddress +
      "&directionsmode=driving";

    const appleMapsUrl =
      "http://maps.apple.com/?daddr=" +
      encodedAddress +
      "&dirflg=d";

    const startTime = Date.now();

    window.location.href = googleMapsUrl;

    setTimeout(() => {
      if (Date.now() - startTime < 1800) {
        window.location.href = appleMapsUrl;
      }
    }, 1200);

    return;
  }

  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=" +
      encodedAddress +
      "&travelmode=driving",
    "_blank",
    "noopener,noreferrer"
  );
};

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
                    href={"tel:" + branch.phone.replace(/\s/g, "")}
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
                  href={"tel:" + branch.phone.replace(/\s/g, "")}
                  className="branch-call-button"
                >
                  📞 Ara
                </a>

                <button
                  type="button"
                  onClick={() => handleDirections(branch.address)}
                  className="branch-directions-button"
                >
                  📍 Yol Tarifi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}