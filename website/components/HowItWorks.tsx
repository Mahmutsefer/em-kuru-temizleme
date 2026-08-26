import {
  ArrowRight,
  Home,
  Sparkles,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Home,
    title: "Kapınızdan Alıyoruz",
    description:
      "Ürünlerinizi sizin için adresinizden teslim alıyor, güvenle temizlik sürecimize taşıyoruz.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Özenle Temizliyoruz",
    description:
      "Her ürünü kumaşına, yapısına ve ihtiyacına göre değerlendiriyor, uygun profesyonel bakım uyguluyoruz.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Temizliğini Tamamlayıp Getiriyoruz",
    description:
      "İşlemi tamamlanan ürünlerin son kontrollerini yapıyor, özenle hazırlayıp adresinize teslim ediyoruz.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="em-process">
      <div className="em-process-container">

        <div className="em-process-heading">
          <div>
            <p className="section-label">NASIL ÇALIŞIR?</p>

            <h2>
              Temizliğin
              <br />
              en kolay hali.
            </h2>
          </div>

          <p className="em-process-intro">
            Siz ürünlerinizi hazırlayın, gerisini bize bırakın. EM olarak
            temizlik sürecinin her aşamasında özenle çalışıyoruz.
          </p>
        </div>

        <div className="em-process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="em-process-card" key={step.number}>

                <div className="em-process-visual">

                

                  <div className="em-process-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  {index < steps.length - 1 && (
                    <div className="em-process-line">
                      <span />
                      <ArrowRight size={18} strokeWidth={1.8} />
                    </div>
                  )}

                </div>

                <div className="em-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
