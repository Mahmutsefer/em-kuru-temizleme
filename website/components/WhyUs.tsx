import Image from "next/image";
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
              NEDEN HASEL ?
            </p>

            <h2 className="why-us-title">
              Her ürüne özel,
              <br />
              özenli bakım.
            </h2>
          </div>

          <div className="why-us-description">
            <p>
              HASEL Temizleme Sistemleri olarak kıyafetlerinizi ve tekstil
              ürünlerinizi yalnızca temizlemiyor, onların
              özelliklerine uygun şekilde bakımını da yapıyoruz.
            </p>

            <div className="why-us-mark">
  <Image
   src="/images/default.svg"
    alt="Hasel Kuru Temizleme"
    width={70}
    height={70}
  />
</div>
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