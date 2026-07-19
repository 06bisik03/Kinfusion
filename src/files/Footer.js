import { useState } from "react";
import styles from "./Footer.module.css";

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.statement} data-reveal>
          <span>Stay for another cup</span>
          <h2>Letters from<br />the <em>roastery.</em></h2>
        </div>
        <div className={styles.signup} data-reveal>
          <p>Seasonal releases, origin stories and considered rituals—sent occasionally.</p>
          {submitted ? (
            <div className={styles.thanks} role="status">Welcome to the house. Your first letter is on its way.</div>
          ) : (
            <form onSubmit={submit}>
              <label htmlFor="newsletter">Email address</label>
              <div>
                <input id="newsletter" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@email.com" required />
                <button type="submit" aria-label="Subscribe to newsletter">↗</button>
              </div>
            </form>
          )}
          <small>By subscribing, you agree to our privacy policy.</small>
        </div>
      </div>

      <div className={styles.middle}>
        <button className={styles.logo} onClick={() => onNavigate("home")}>
          <span>K</span><strong>Kinfusion</strong><small>London coffee roastery</small>
        </button>
        <div className={styles.links}>
          <div>
            <span>Explore</span>
            <button onClick={() => onNavigate("products")}>Collection</button>
            <button onClick={() => onNavigate("premium")}>The Reserve</button>
            <button onClick={() => onNavigate("blog")}>Journal</button>
          </div>
          <div>
            <span>Visit</span>
            <p>14 Newburgh Street<br />London W1F 7RT</p>
            <a href="mailto:hello@kinfusion.com">hello@kinfusion.com</a>
          </div>
          <div>
            <span>Hours</span>
            <p>Mon—Fri&nbsp; 7.30—18.00<br />Sat—Sun&nbsp; 8.00—17.00</p>
            <a href="#instagram" aria-label="Kinfusion on Instagram">Instagram ↗</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Kinfusion Coffee Ltd.</span>
        <span>Crafted slowly in London</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  );
};

export default Footer;
