import { useState } from "react";
import styles from "./Premium.module.css";

const Premium = ({ onAdd }) => {
  const [added, setAdded] = useState(false);

  const addReserve = () => {
    onAdd();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className={styles.container}>
      <div className={styles.marquee} aria-hidden="true">
        <div>
          <span>Rare harvest</span><i>✦</i><span>Roasted by hand</span><i>✦</i><span>Numbered release</span><i>✦</i>
          <span>Rare harvest</span><i>✦</i><span>Roasted by hand</span><i>✦</i><span>Numbered release</span><i>✦</i>
        </div>
      </div>

      <div className={styles.reserve}>
        <div className={styles.visual} data-reveal>
          <div className={styles.mainImage}><img src="/images/coff1.jpeg" alt="Kinfusion reserve coffee prepared by hand" /></div>
          <div className={styles.secondaryImage}><img src="/images/coff2.jpeg" alt="Pour-over coffee preparation" /></div>
          <div className={styles.number}>R<br /><span>01</span></div>
        </div>

        <div className={styles.content} data-reveal>
          <div className={styles.kicker}>The Kinfusion Reserve · Release 01</div>
          <h2>An extraordinary coffee, available only once.</h2>
          <p className={styles.lead}>
            From a tiny high-altitude lot in Kayanza, Burundi, this natural-process Red Bourbon is expressive, silken and deeply sweet.
          </p>

          <dl className={styles.notes}>
            <div><dt>Origin</dt><dd>Kayanza, Burundi</dd></div>
            <div><dt>Variety</dt><dd>Red Bourbon</dd></div>
            <div><dt>Expression</dt><dd>Plum · Rose · Cacao</dd></div>
            <div><dt>Release</dt><dd>240 numbered boxes</dd></div>
          </dl>

          <div className={styles.purchase}>
            <div><strong>£68</strong><span>200g · Whole bean</span></div>
            <button onClick={addReserve}>{added ? "Added to bag" : "Acquire the reserve"}<span>↗</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
