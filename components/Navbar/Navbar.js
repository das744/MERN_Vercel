"use client"; // Marks this as a client component

import { useState } from "react";
import styles from "./Navbar.module.css"; // Use CSS modules for styling if applicable
import Link from "next/link"; // For internal navigation in Next.js

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.leftSide}>
          <i className="fas fa-envelope"></i> email@example.com
          <i className="fas fa-phone"></i> +123 456 7890
        </div>
        <div className={styles.rightSideSocial}>
          <a href="https://facebook.com" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyLogo</div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              Services <i className="fa fa-caret-down"></i>
            </a>
            <div className={styles.dropdownContent}>
              <Link href="/services/service1">Service 1</Link>
              <Link href="/services/service2">Service 2</Link>
              <Link href="/services/service3">Service 3</Link>
            </div>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.quote}>Get Quote</button>
        <div className={styles.menuIcon} onClick={openSidebar}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : ""
        }`}
      >
        <i className={`fa fa-times ${styles.closeBtn}`} onClick={closeSidebar}></i>
        <ul className={styles.sidebarLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              Services <i className="fa fa-caret-down"></i>
            </a>
            <div className={styles.dropdownContent}>
              <Link href="/services/service1">Service 1</Link>
              <Link href="/services/service2">Service 2</Link>
              <Link href="/services/service3">Service 3</Link>
            </div>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
