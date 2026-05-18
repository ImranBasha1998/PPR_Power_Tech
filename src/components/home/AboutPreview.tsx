import Link from "next/link";
import styles from "./AboutPreview.module.css";

const features = [
  "Cost Effective Solutions",
  "Safety & Security Assured",
  "Highly Skilled Manpower",
  "Timely Execution",
  "Innovative Approach",
  "Electrical Architecture Expertise",
  "Creative Lighting Solutions",
];

export default function AboutPreview() {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageWrapper}>
          {/* We would use next/image here, using a placeholder div for now */}
          <div className={styles.imagePlaceholder}>
            Premium Engineering Visual (Placeholder)
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className="text-gradient">Engineering Excellence Since 2007</h2>
          <p>
            We provide complete electrical solutions including design, installation, maintenance, 
            and facility services for hospitals, commercial spaces, institutional buildings, 
            IT parks, and industrial infrastructure.
          </p>
          
          <div className={styles.features}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className={styles.icon}>✓</span>
                {feature}
              </div>
            ))}
          </div>
          
          <Link href="/about" className="btn-primary">
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
