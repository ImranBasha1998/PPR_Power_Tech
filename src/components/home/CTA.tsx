import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>Need a Reliable Electrical Turnkey Contractor?</h2>
        <p className={styles.subtitle}>
          Get in touch with our experts today for a free consultation on your next project.
        </p>
        
        <div className={styles.actions}>
          <a href="tel:+919876543210" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Call Now
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
            WhatsApp Us
          </a>
          <Link href="/contact" className="btn-outline" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
