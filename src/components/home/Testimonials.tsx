import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "PPR Electrical completely transformed our hospital's electrical infrastructure. Their attention to safety and timely execution was highly impressive.",
    name: "Dr. Ramesh",
    title: "Hospital Management",
    initial: "R"
  },
  {
    quote: "Working with them on our IT Park was a seamless experience. They provided highly innovative lighting and energy-efficient solutions.",
    name: "S. Karthik",
    title: "Facility Director",
    initial: "K"
  },
  {
    quote: "Their team's skilled manpower and cost-effective turnkey solutions made our commercial project a grand success.",
    name: "Anita V.",
    title: "Corporate Client",
    initial: "A"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What industry leaders say about our electrical engineering expertise.
        </p>
        
        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.text}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div className={styles.info}>
                  <h4>{t.name}</h4>
                  <p>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
