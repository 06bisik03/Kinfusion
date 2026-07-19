import { useRef } from "react";
import styles from "./Home.module.css";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Home = ({ onNavigate }) => {
  const visualRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!visualRef.current) return;
    const bounds = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualRef.current.style.setProperty("--pointer-x", `${x * 12}px`);
    visualRef.current.style.setProperty("--pointer-y", `${y * 12}px`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.eyebrow}><span /> Artisan coffee · London</div>
        <h1>The ritual of <em>remarkable</em> coffee.</h1>
        <p className={styles.intro}>
          Rare origins, roasted in considered batches and composed for the quiet moments that matter.
        </p>
        <div className={styles.ctas}>
          <button className={styles.primaryCta} onClick={() => onNavigate("products")}>
            Explore the collection <Arrow />
          </button>
          <button className={styles.textCta} onClick={() => onNavigate("premium")}>Discover our craft</button>
        </div>

        <div className={styles.proof}>
          <div><strong>04</strong><span>Exceptional<br />origins</span></div>
          <div><strong>48h</strong><span>Roasted before<br />dispatch</span></div>
          <div className={styles.signature}>Kin<span>—</span>Fusion</div>
        </div>
      </div>

      <div className={styles.visual} ref={visualRef} onPointerMove={handlePointerMove}>
        <div className={styles.image} />
        <div className={styles.visualShade} />
        <div className={styles.issue}>House ritual <span>№ 01</span></div>
        <div className={styles.seal} aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <defs><path id="sealPath" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
            <text><textPath href="#sealPath">ROASTED WITH INTENTION · KINFUSION · </textPath></text>
          </svg>
          <span>K</span>
        </div>
        <div className={styles.scrollCue}><span /> Scroll to discover</div>
      </div>
    </div>
  );
};

export default Home;
