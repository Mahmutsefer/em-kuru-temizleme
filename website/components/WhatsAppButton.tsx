export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp ile iletişime geç"
    >
      <span className="whatsapp-icon">☏</span>

      <span className="whatsapp-text">
        WhatsApp
      </span>
    </a>
  );
}