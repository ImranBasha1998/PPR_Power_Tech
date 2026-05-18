"use client";

import { useState } from "react";
import styles from "./page.module.css";
import CTA from "@/components/home/CTA";

const projectsList = [
  { 
    id: 1, 
    title: "The Times of India", 
    category: "Commercial", 
    desc: "Complete electrical infrastructure setup including HT/LT panels and specialized lighting for the printing and editorial facility.",
    scope: "Turnkey Electrical",
    duration: "18 Months"
  },
  { 
    id: 2, 
    title: "Kauvery Hospital", 
    category: "Hospitals", 
    desc: "Mission-critical hospital electrical works featuring zero-interruption UPS systems, operation theatre wiring, and isolation panels.",
    scope: "Healthcare Electrical",
    duration: "24 Months"
  },
  { 
    id: 3, 
    title: "CBRE Office Space", 
    category: "Office Spaces", 
    desc: "Premium commercial interior electrical works, smart lighting controls, and energy-efficient power distribution for CBRE.",
    scope: "Interior Electrification",
    duration: "8 Months"
  },
  { 
    id: 4, 
    title: "Global Infocity Park", 
    category: "IT Parks", 
    desc: "Large scale IT park electrification including substation automation, massive DG backups, and campus-wide networking.",
    scope: "Infrastructure",
    duration: "36 Months"
  },
  { 
    id: 5, 
    title: "Standard Fireworks", 
    category: "Factories", 
    desc: "Highly specialized, safety-first electrical installation for hazardous environments conforming to strict industrial safety codes.",
    scope: "Industrial Safety",
    duration: "12 Months"
  },
  { 
    id: 6, 
    title: "Flipkart (Instakart)", 
    category: "Commercial", 
    desc: "Warehouse electrification including high-bay lighting, conveyor power systems, and robust panel board installations.",
    scope: "Warehouse Electrical",
    duration: "10 Months"
  },
  { 
    id: 7, 
    title: "Executive Ship Management", 
    category: "Office Spaces", 
    desc: "Corporate office electrical fit-outs with premium aesthetic lighting and reliable workstation power distribution.",
    scope: "Corporate Office",
    duration: "6 Months"
  },
  { 
    id: 8, 
    title: "Scientific Publishing Services", 
    category: "Institutional", 
    desc: "Facility electrical management and upgrades to support high-density computing and continuous operations.",
    scope: "Facility Upgrade",
    duration: "14 Months"
  },
  { 
    id: 9, 
    title: "PhantomFX", 
    category: "Commercial", 
    desc: "High-performance electrical setup for a visual effects studio requiring ultra-stable power for rendering farms.",
    scope: "Studio Electrification",
    duration: "5 Months"
  }
];

const categories = ["All", "Hospitals", "Commercial", "Office Spaces", "IT Parks", "Factories", "Institutional"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container animate-up">
          <h1 className={styles.title}>Project <span className="text-gradient">Showcase</span></h1>
          <p className={styles.subtitle}>
            A curated selection of our 600+ successful turnkey electrical installations 
            across various sectors in India.
          </p>
        </div>
      </section>

      <section className={styles.projectsWrapper}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={`${styles.projectCard} animate-up`}>
                <div className={styles.imageBox}>
                  {project.title} Visual
                </div>
                <div className={styles.content}>
                  <div className={styles.category}>{project.category}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.desc}</p>
                  
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Scope</span>
                      <span className={styles.statValue}>{project.scope}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Timeline</span>
                      <span className={styles.statValue}>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardAction}>
                    View Case Study <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
