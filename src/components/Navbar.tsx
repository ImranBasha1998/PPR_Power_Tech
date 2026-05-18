"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          PPR <span>Electrical</span>
        </Link>

        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.link} ${pathname === item.path ? styles.active : ""}`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
            Get Quote
          </Link>
        </nav>

        <button className={styles.mobileMenuBtn}>☰</button>
      </div>
    </header>
  );
}
