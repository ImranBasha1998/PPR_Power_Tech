"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, send to backend here.
    setStatus("Message sent successfully! We will get back to you shortly.");
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <main>
      <section className={styles.hero}>
        <div className="container animate-up">
          <h1 className={styles.title}>Contact <span className="text-gradient">Us</span></h1>
          <p className={styles.subtitle}>
            Ready to start your next project? Get in touch with our experts today.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.infoCard} animate-up`}>
              <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Office Details</h2>
              
              <div className={styles.infoItem}>
                <div className={styles.icon}>📍</div>
                <div className={styles.details}>
                  <h3>Head Office</h3>
                  <p>123 Engineering Park, OMR Road,<br />Chennai, Tamil Nadu 600097, India</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>📞</div>
                <div className={styles.details}>
                  <h3>Phone</h3>
                  <p>+91 98765 43210<br />+91 44 2345 6789</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>✉️</div>
                <div className={styles.details}>
                  <h3>Email</h3>
                  <p>info@pprelectrical.com<br />projects@pprelectrical.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>⏰</div>
                <div className={styles.details}>
                  <h3>Working Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Emergency Support: 24/7</p>
                </div>
              </div>
            </div>

            <div className={`${styles.formCard} animate-up delay-100`}>
              <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send an Inquiry</h2>
              {status && (
                <div style={{ padding: '1rem', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', borderRadius: '8px', marginBottom: '1rem' }}>
                  {status}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className={styles.input} required placeholder="John Doe" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className={styles.input} required placeholder="john@company.com" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className={styles.input} required placeholder="+91 98765 43210" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="service">Interested Service</label>
                  <select id="service" className={styles.input} required>
                    <option value="">Select a service...</option>
                    <option value="Turnkey Electrical">Turnkey Electrical</option>
                    <option value="Hospital Electrical">Hospital Electrical</option>
                    <option value="Facility Maintenance">Facility Maintenance</option>
                    <option value="Lighting Design">Lighting Design</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className={styles.textarea} required placeholder="Tell us about your project requirements..."></textarea>
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          <div className={`${styles.mapSection} animate-up delay-200`}>
            {/* Embedded Google Map Placeholder */}
            Interactive Google Map (Placeholder for Chennai Office)
          </div>
        </div>
      </section>
    </main>
  );
}
