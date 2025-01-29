import styles from './aboutUs.module.css';

const AboutUs = () => {
  const images = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
      alt: 'Image 1',
      className: styles.image1,
    },
    {
      src: 'https://images.unsplash.com/photo-1726594701749-04cfbc6e2007?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 2',
      className: styles.image2,
    },
    {
      src: 'https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Image 3',
      className: styles.image3,
    },
  ];

  return (
    <section className={styles.about_us}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span>W</span>ho We Are
        </h1>
        <p id="animated-paragraph">
          We’re a team of dedicated digital marketing professionals with years of experience in helping businesses grow. Our focus is on measurable results and delivering ROI-driven strategies that enhance brand visibility and customer engagement.
        </p>
        <button>Contact ME</button>
      </div>
      <div className={styles.aboutUsImages}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
