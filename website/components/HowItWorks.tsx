export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Ürününüzü Bize Getirin",
      description:
        "Temizlenmesini istediğiniz kıyafet veya tekstil ürününüzü mağazamıza getirin.",
    },
    {
      number: "02",
      title: "Özenli Temizlik",
      description:
        "Ürününüzü kumaş ve malzeme özelliklerine göre değerlendirip uygun yöntemi uyguluyoruz.",
    },
    {
      number: "03",
      title: "Hazır Teslim Alın",
      description:
        "Temizlik ve son kontroller tamamlandıktan sonra ürününüzü özenle teslim ediyoruz.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">

        <div className="how-it-works-heading">
          <div>
            <p className="section-label">NASIL ÇALIŞIYORUZ?</p>

            <h2>
              Temizlik sürecimiz,
              <br />
              baştan sona özenli.
            </h2>
          </div>

          <p className="how-it-works-intro">
            Ürünlerinizi teslim aldığımız andan teslim ettiğimiz ana
            kadar her aşamada dikkatli ve profesyonel bir süreç
            uyguluyoruz.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.number}>

              <div className="step-top">
                <span className="step-number">
                  {step.number}
                </span>

                <span className="step-line" />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}