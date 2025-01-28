


import styles from "@/components/About/About.module.css";

const About = () => {
  const features = [
    "Lorem, ipsum dolor.",
    "Explicabo, molestiae modi!",
    "Dolorem, laudantium officia?",
    "Odit, temporibus deserunt?",
    "Minima, non dolorem.",
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <h1>
          <span>H</span>ow We <span>Work</span>
        </h1>
        <p>
          We offer flexible packages tailored to fit your needs. From personal
          photoshoots to large events, find the perfect option for you.
        </p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check-circle"></i> {feature}
            </li>
          ))}
        </ul>
        <button className={styles.aboutBtn}>
          Learn More <i className="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default About;
