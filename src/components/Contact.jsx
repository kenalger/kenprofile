export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="reveal contact-eyebrow">
        <span className="mark">$</span> contact
      </div>

      <a
        href="mailto:algerdegdimaymay@gmail.com"
        className="reveal contact-email ul"
        style={{ "--rd": "60ms" }}
      >
        algerdegdimaymay@gmail.com
      </a>

      <div className="reveal contact-meta" style={{ "--rd": "120ms" }}>
        <a
          href="https://www.linkedin.com/in/ken-alger-dimaymay-671927307"
          target="_blank"
          rel="noopener"
          className="ul"
        >
          LinkedIn ↗
        </a>
        <a href="tel:+639212662965" className="ul">
          +63 921 266 2965
        </a>
        <a
          href="/Ken-Alger-Dimaymay-CV.pdf"
          download="Ken-Alger-Dimaymay-CV.pdf"
          className="ul"
        >
          Download CV ↓
        </a>
        <span>Cebu City, PH</span>
        <span className="contact-status">
          <span className="dot" />
          Open to freelance
        </span>
      </div>
    </section>
  );
}
