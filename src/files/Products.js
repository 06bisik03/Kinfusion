import styles from "./Products.module.css";

const features = [
  {
    number: "01",
    title: "Origin, uncovered",
    text: "Direct relationships with growers let every lot tell a vivid, honest story of place.",
    icon: <><path d="M8 24C8 12 15 5 25 4c1 11-5 20-17 20Z" /><path d="M8 24c4-7 9-12 17-20" /></>,
  },
  {
    number: "02",
    title: "Roasted with restraint",
    text: "Small-batch profiles honour sweetness, clarity and the character already inside the bean.",
    icon: <><path d="M17 4c8 4 11 11 8 20-9 1-16-5-17-14" /><path d="M22 6c-7 5-9 10-7 17" /></>,
  },
  {
    number: "03",
    title: "Made for ritual",
    text: "Thoughtful recipes and beautifully tactile details turn a daily cup into a private ceremony.",
    icon: <><path d="M5 11h20v7a9 9 0 0 1-9 9h-2a9 9 0 0 1-9-9v-7Z" /><path d="M25 14h2a4 4 0 0 1 0 8h-4M9 5c0 2 2 2 2 4M16 4c0 2 2 2 2 4" /></>,
  },
];

const Products = () => (
  <div className={styles.container}>
    <div className={styles.intro} data-reveal>
      <div className={styles.kicker}>The house philosophy</div>
      <h2>Coffee shaped by <em>place</em>, time<br />and a human touch.</h2>
      <p>
        We follow each coffee from hillside to cup, preserving what makes it singular. The result is a collection with depth, elegance and a distinct sense of place.
      </p>
    </div>

    <div className={styles.features}>
      {features.map((feature, index) => (
        <article className={styles.feature} key={feature.title} data-reveal style={{ "--delay": `${index * 110}ms` }}>
          <div className={styles.featureTop}>
            <span>{feature.number}</span>
            <svg viewBox="0 0 32 32" aria-hidden="true">{feature.icon}</svg>
          </div>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Products;
