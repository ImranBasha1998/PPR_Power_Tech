import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | PPR Electrical",
  description: "Learn about PPR Electrical, a certified EA Grade Electrical Consultant operating since 2007 with over 600 successful projects.",
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container animate-up">
          <h1 className={styles.title}>About <span className="text-gradient">PPR Electrical</span></h1>
          <p className={styles.subtitle}>
            Certified EA Grade Electrical Consultant & Facility Service
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>Our History</h2>
              <p>
                Established in 2007, PPR Electrical has grown to become a leading name in the electrical 
                engineering and facility management sector across India. With over 13 years of core experience, 
                we have successfully delivered turnkey electrical solutions to a diverse clientele.
              </p>
              <p>
                Our journey is marked by over 600 completed projects and the trust of more than 1000 clients. 
                As a certified EA Grade Electrical Consultant, we ensure that every project meets the highest 
                standards of safety, efficiency, and compliance.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <span className="badge" style={{ background: 'rgba(0,163,255,0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 'bold' }}>
                  ✓ ISO Certified
                </span>
                <span className="badge" style={{ background: 'rgba(0,163,255,0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 'bold', marginLeft: '1rem' }}>
                  ✓ EA Grade Contractor
                </span>
              </div>
            </div>
            <div className={styles.imageBox}>
              Corporate Headquarters (Placeholder)
            </div>
          </div>

          <div className={styles.missionVision}>
            <div className={styles.mvCard}>
              <h3>🎯 Our Mission</h3>
              <p>
                To provide safe, innovative, and cost-effective electrical turnkey solutions that empower 
                modern infrastructure. We strive to deliver excellence through skilled manpower, timely 
                execution, and unwavering commitment to client satisfaction.
              </p>
            </div>
            <div className={styles.mvCard}>
              <h3>👁️ Our Vision</h3>
              <p>
                To be the most trusted and preferred electrical engineering partner globally, setting 
                new benchmarks in electrical architecture, creative lighting solutions, and facility 
                management through sustainable and forward-thinking practices.
              </p>
            </div>
          </div>

          <div className={styles.team}>
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">A team of 35+ skilled professionals driving engineering excellence.</p>
            
            <div className={styles.teamGrid}>
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className={styles.teamMember}>
                  <div className={styles.avatar}>👤</div>
                  <h4>Executive Director</h4>
                  <p>Engineering Operations</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
