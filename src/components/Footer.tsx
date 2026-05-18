import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.col}>
            <h3>PPR Electrical</h3>
            <p>
              Certified EA Grade Electrical Consultant & Facility Service Since 2007. 
              Delivering top-tier electrical turnkey solutions across India.
            </p>
          </div>
          
          <div className={styles.col}>
            <h3>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h3>Our Services</h3>
            <ul className={styles.links}>
              <li><Link href="/services#design">Electrical Design</Link></li>
              <li><Link href="/services#installation">Installation</Link></li>
              <li><Link href="/services#maintenance">Facility Maintenance</Link></li>
              <li><Link href="/services#hospital">Hospital Electrical Works</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h3>Contact Us</h3>
            <p>Email: info@pprelectrical.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, Tamil Nadu, India</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} PPR Electrical. All rights reserved.</p>
          <p>Designed for Engineering Excellence</p>
        </div>
      </div>
    </footer>
  );
}
