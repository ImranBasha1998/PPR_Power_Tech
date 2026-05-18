import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgAnimation}></div>
      <div className={styles.gridOverlay}></div>
      
      <div className={`container ${styles.content}`}>
        <div className={`${styles.badge} animate-up`}>
          EA Grade Certified Consultants
        </div>
        
        <h1 className={`${styles.title} animate-up delay-100`}>
          Complete Electrical <span className={styles.highlight}>Turnkey Solutions</span><br />
          for Modern Infrastructure
        </h1>
        
        <p className={`${styles.subtitle} animate-up delay-200`}>
          Certified EA Grade Electrical Consultant & Facility Service Since 2007. 
          Delivering high-end engineering excellence for commercial, institutional, and industrial projects.
        </p>
        
        <div className={`${styles.actions} animate-up delay-300`}>
          <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Get Free Consultation
          </Link>
          <Link href="/projects" className="btn-outline" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
