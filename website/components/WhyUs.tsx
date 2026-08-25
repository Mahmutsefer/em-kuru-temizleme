const reasons = [
  {
    number: "01",
    title: "Profesyonel Hizmet",
    description:
      "Her ürün için özenli, dikkatli ve profesyonel bir hizmet anlayışı.",
  },
  {
    number: "02",
    title: "Kaliteli Bakım",
    description:
      "Ürünlerin kumaş ve malzeme özelliklerine uygun temizlik yöntemleri.",
  },
  {
    number: "03",
    title: "Müşteri Memnuniyeti",
    description:
      "Her siparişte kaliteli sonuç ve müşterilerimizin memnuniyetini hedefliyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-em" className="why-us">
      <div className="why-us-container">

        <div className="why-us-top">

          <div>
            <p className="section-label">
              NEDEN EM?
            </p>

            <h2>
              Her ürüne özel,
              <br />
              özenli bakım.
            </h2>
          </div>

          <div className="why-us-description">
            <p>
              EM Kuru Temizleme olarak kıyafetlerinizi ve tekstil
              ürünlerinizi yalnızca temizlemiyor, onların
              özelliklerine uygun şekilde bakımını da yapıyoruz.
            </p>

            <span className="why-us-mark">
              EM
            </span>
          </div>

        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason" key={reason.number}>

              <div className="reason-top">
                <strong>{reason.number}</strong>

                <span />
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}