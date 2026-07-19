import styles from "./Blog.module.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

const Blog = () => (
  <div className={styles.container}>
    <div className={styles.heading} data-reveal>
      <div><span>Notes from the house</span><h2>The journal</h2></div>
      <p>Stories of provenance, considered craft and the people who shape the cup.</p>
    </div>

    <div className={styles.editorial}>
      <article className={styles.featured} data-reveal>
        <div className={styles.featureImage}>
          <img src="/images/coff2.jpeg" alt="A barista preparing pour-over coffee" />
          <span>Field notes · 08 min</span>
        </div>
        <div className={styles.featureCopy}>
          <span>Journal 01 — Ritual</span>
          <h3>The quiet theatre of the morning pour</h3>
          <p>A slower method reveals more than flavour. We explore the gestures, patience and precision behind a considered first cup.</p>
          <button>Read the story <Arrow /></button>
        </div>
      </article>

      <div className={styles.stories}>
        <article data-reveal>
          <div className={styles.storyImage}><img src="/images/ddd.webp" alt="Coffee beans and an espresso cup" /></div>
          <div className={styles.storyCopy}>
            <span>Origin · 06 min</span>
            <h3>Why altitude changes everything</h3>
            <button aria-label="Read Why altitude changes everything"><Arrow /></button>
          </div>
        </article>
        <article data-reveal>
          <div className={styles.storyImage}><img src="/images/coffee.jpeg" alt="Latte art being poured" /></div>
          <div className={styles.storyCopy}>
            <span>At home · 04 min</span>
            <h3>Creating café texture at home</h3>
            <button aria-label="Read Creating café texture at home"><Arrow /></button>
          </div>
        </article>
      </div>
    </div>
  </div>
);

export default Blog;
