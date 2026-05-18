import styles from "./Industries.module.css";

const industries = [
  { name: "Hospitals", icon: "🏥" },
  { name: "Data Centers", icon: "💻" },
  { name: "Commercial Buildings", icon: "🏢" },
  { name: "Educational Institutions", icon: "🎓" },
  { name: "Factories", icon: "🏭" },
  { name: "Banking Sector", icon: "🏦" },
  { name: "Malls", icon: "🛍️" },
  { name: "IT Parks", icon: "🌐" },
];

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">
          Specialized electrical infrastructure tailored for mission-critical operations 
          across diverse sectors.
        </p>
        
        <div className={styles.grid}>
          {industries.map((industry, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{industry.icon}</div>
              <h3 className={styles.title}>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
