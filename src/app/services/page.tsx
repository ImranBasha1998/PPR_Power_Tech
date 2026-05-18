import type { Metadata } from "next";
import styles from "./page.module.css";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services | PPR Electrical",
  description: "Explore our comprehensive electrical turnkey solutions including design, installation, maintenance, AMC, and specialized hospital and commercial works.",
};

const servicesList = [
  {
    id: "design",
    title: "Electrical Design & Engineering",
    icon: "📐",
    desc: "Comprehensive electrical architecture design tailored for modern infrastructure. We utilize cutting-edge software to ensure efficiency, safety, and scalable power distribution systems.",
    features: ["Load Calculation", "Single Line Diagrams", "3D Modeling", "Energy Optimization"]
  },
  {
    id: "installation",
    title: "Electrical Installation",
    icon: "⚡",
    desc: "End-to-end turnkey installation by certified professionals. From high tension (HT) to low tension (LT) panels, we ensure seamless execution with strict adherence to safety protocols.",
    features: ["HT/LT Panels", "Transformer Erection", "Cabling & Termination", "Testing & Commissioning"]
  },
  {
    id: "maintenance",
    title: "Facility Maintenance",
    icon: "🔧",
    desc: "Proactive and reactive maintenance services to ensure zero downtime. We manage the complete electrical infrastructure of your facility, ensuring longevity and reliability.",
    features: ["24/7 Support", "Preventive Maintenance", "Thermography", "Power Quality Analysis"]
  },
  {
    id: "hospital",
    title: "Hospital Electrical Works",
    icon: "🏥",
    desc: "Specialized electrical solutions for healthcare facilities. We understand the critical nature of hospital power systems and provide zero-interruption architectures.",
    features: ["Operation Theatre Wiring", "UPS Systems", "Isolation Panels", "Emergency Backup"]
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Solutions",
    icon: "🏢",
    desc: "Robust power systems for IT Parks, Factories, and Commercial spaces. Designed to handle heavy loads while maintaining energy efficiency.",
    features: ["Busduct Installation", "Substation Automation", "DG Set Installation", "Earth Pit Works"]
  },
  {
    id: "lighting",
    title: "Creative Lighting Design",
    icon: "💡",
    desc: "Aesthetic and energy-efficient lighting solutions for showrooms, offices, and institutions. We blend architecture with optimal illumination.",
    features: ["Facade Lighting", "Smart Controls", "Lux Level Optimization", "LED Retrofitting"]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container animate-up">
          <h1 className={styles.title}>Our <span className="text-gradient">Services</span></h1>
          <p className={styles.subtitle}>
            From conceptual design to final commissioning and maintenance, we offer 
            complete electrical turnkey solutions for your business.
          </p>
        </div>
      </section>

      <section className={styles.servicesWrapper}>
        <div className="container">
          {servicesList.map((service) => (
            <div key={service.id} id={service.id} className={styles.serviceItem}>
              <div className={styles.textContent}>
                <h2>
                  <div className={styles.icon}>{service.icon}</div>
                  {service.title}
                </h2>
                <p>{service.desc}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}><span className={styles.check}>✓</span> {feature}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.imageBox}></div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
