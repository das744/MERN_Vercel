// components/Hero.js
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContainerSocial}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Services</h1>
          <p className={styles.heroSubtitle}>We deliver excellence with passion.</p>
        </div>
      </div>

      <div className={styles.featureGrid}>
        <div className={styles.smallBox}>
          <div className={styles.box1}>
            <i className="fas fa-check-circle"></i>
            <h3>Reliability</h3>
            <p>Count on us for consistent quality.</p>
          </div>
          <div className={styles.box1}>
            <i className="fas fa-thumbs-up"></i>
            <h3>Expertise</h3>
            <p>Our team has proven experience.</p>
          </div>
          <div className={styles.box1}>
            <i className="fas fa-heart"></i>
            <h3>Customer Care</h3>
            <p>Your satisfaction is our priority.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
