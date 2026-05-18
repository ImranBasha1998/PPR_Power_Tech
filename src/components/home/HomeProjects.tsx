"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./HomeProjects.module.css";

const projects = [
  { id: 1, title: "The Times of India", category: "Commercial", image: "Times of India Facility" },
  { id: 2, title: "Kauvery Hospital", category: "Hospitals", image: "Kauvery Hospital Electrical Works" },
  { id: 3, title: "CBRE Office Space", category: "Office Spaces", image: "CBRE HQ" },
  { id: 4, title: "Global Infocity Park", category: "IT Parks", image: "Global Infocity" },
  { id: 5, title: "Standard Fireworks", category: "Factories", image: "Standard Fireworks Factory" },
  { id: 6, title: "Flipkart (Instakart)", category: "Commercial", image: "Flipkart Warehouse" },
];

const categories = ["All", "Hospitals", "Commercial", "Office Spaces", "IT Parks", "Factories"];

export default function HomeProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Premium Project Showcase</h2>
        <p className="section-subtitle">
          Over 600 successful turnkey electrical installations across India.
        </p>

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
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imagePlaceholder}>
                {project.image}
              </div>
              <div className={styles.overlay}>
                <div className={styles.category}>{project.category}</div>
                <h3 className={styles.title}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/projects" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
