import React from "react";
import styles from "@/components/Service/Service.module.css"; // Import scoped styles
import { servicesData } from "@/components/Service/serviceData"; // Import service data

const Service = () => {
  return (
    <section className={styles.services}>
      <h1 className={styles.heading}>How We Work</h1>
      <p className={styles.description}>
        We offer flexible packages tailored to fit your needs. From personal
        photoshoots to large events, find the perfect option for you.
      </p>
      <div className={styles.boxContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.box}>
            <img src={service.icon} alt={`${service.title} icon`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
