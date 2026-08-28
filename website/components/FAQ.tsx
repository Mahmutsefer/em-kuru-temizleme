"use client";

import { useState } from "react";

const questions = [
{
question: "Kuru temizleme işlemi ne kadar sürer?",
answer:
"İşlem süresi ürünün türüne ve uygulanacak temizleme yöntemine göre değişmektedir. Ürününüzü şubemize teslim ettiğinizde tahmini teslim süresi hakkında size bilgi verebiliriz.",
},
{
question: "Hangi ürünler kuru temizleme yapılabilir?",
answer:
"Gömlek, pantolon, ceket, takım elbise, kaban, mont, elbise, kazak, tişört ve palto gibi birçok farklı ürün için profesyonel kuru temizleme hizmeti sunuyoruz.",
},
{
question: "Halı yıkama fiyatları nasıl hesaplanır?",
answer:
"Halı yıkama fiyatları halının türüne ve metrekare ölçüsüne göre hesaplanmaktadır. Güncel fiyatlarımızı Fiyatlar sayfamızdan inceleyebilirsiniz.",
},
{
question: "Ürünlerimi hangi şubeye teslim edebilirim?",
answer:
"Ürünlerinizi size en yakın Hasel Kuru Temizleme şubemize teslim edebilirsiniz. Şubelerimiz sayfasından adres, telefon ve çalışma saatlerini görebilirsiniz.",
},
{
question: "Kuru temizleme fiyatlarını nereden görebilirim?",
answer:
"Güncel hizmet ve ürün fiyatlarımızı Fiyatlar sayfamızdan detaylı olarak inceleyebilirsiniz.",
},
{
question: "WhatsApp üzerinden bilgi alabilir miyim?",
answer:
"Evet. WhatsApp üzerinden bizimle iletişime geçerek hizmetlerimiz, fiyatlarımız ve teslim süreleri hakkında bilgi alabilirsiniz.",
},
];

export default function FAQ() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleQuestion = (index: number) => {
setOpenIndex(openIndex === index ? null : index);
};

return ( <section className="faq-section" id="sss"> <div className="faq-container"> <div className="faq-heading"> <p className="section-label">SIKÇA SORULAN SORULAR</p>

      <h2>Merak ettikleriniz.</h2>

      <p>
        Hizmetlerimiz hakkında en sık sorulan soruların cevaplarını
        burada bulabilirsiniz.
      </p>
    </div>

    <div className="faq-list">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className={`faq-item ${isOpen ? "open" : ""}`}
            key={item.question}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>

              <span className="faq-icon">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div className={`faq-answer ${isOpen ? "visible" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
