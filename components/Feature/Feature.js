import React from "react";
import styles from "@/components/Feature/Feature.module.css";
import { featuresData } from "@/components/Feature/featureData";

const Feature = () => {
  return (
    <section id="feature" className={styles.featureSection}>
      <h1 className={styles.heading}>
        <span>H</span>ow We <span>Work</span>
      </h1>
      <p className={styles.description}>
        We offer flexible packages tailored to fit your needs. From personal
        photoshoots to large events, find the perfect option for you.
      </p>
      <div className={styles.featureGridContainer}>
        {featuresData.map((feature) => (
          <div key={feature.id} className={styles.gridItem}>
            <div className={styles.iconContainer}>
              <i className={`${feature.icon} ${styles.icon}`}></i>
            </div>
            <div className={styles.content}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className={styles.featureBtn}>{feature.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
