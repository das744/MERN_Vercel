import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>
            <i className="fas fa-lightbulb"></i> 
             WDM
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className={styles.box}>
          <h3>quick links</h3>
          <a href="home.html" className={styles.link}>
            home
          </a>
          <a href="about.html" className={styles.link}>
            about
          </a>
          <a href="courses.html" className={styles.link}>
            courses
          </a>
          <a href="contact.html" className={styles.link}>
            contact
          </a>
        </div>

        <div className={styles.box}>
          <h3>useful links</h3>
          <a href="#" className={styles.link}>
            help center
          </a>
          <a href="#" className={styles.link}>
            ask questions
          </a>
          <a href="#" className={styles.link}>
            send feedback
          </a>
          <a href="#" className={styles.link}>
            private policy
          </a>
          <a href="#" className={styles.link}>
            terms of use
          </a>
        </div>

        <div className={styles.box}>
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email" className={styles.email} />
            <input type="submit" value="subscribe" className={styles.btn} />
          </form>
        </div>
      </div>

      <div className={styles.credit}>
        created by <a>Primedesign.com.au</a> | all rights reserved!
      </div>
    </section>
  );
};

export default Footer;
