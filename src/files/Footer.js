import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.logoTitle}>Kinfusion</div>
      </div>
      <div className={styles.middle}>
        <div className={styles.email}>
          <div className={styles.signup}>
            <label htmlFor="signup">Subscribe to our Newsletter.</label>
            <input id="signup" placeholder="Your Email Address" />
          </div>
          <div className={styles.btn}>
            <button>Sign up</button>
          </div>
        </div>
        <div className={styles.contact}>
          <div>Address</div>
          <div>Riverside Building County Hall, London SE1 7PB</div>
        </div>
        <div className={styles.contact}>
          <div>Contact</div>
          <div>123456789 kinfusion@kinfusion.com</div>
        </div>
        <div className={styles.contact}>
          <div>Office Hours</div>
          <div>Monday - Saturday <br/> 9AM - 10PM</div>
        </div>
      </div>
        <div className={styles.last}>
            © Kinfusion Ltd. All rights reserved | Website Template designed by Baris Ekin ISIK
        </div>
      
    </div>
  );
};
export default Footer;
