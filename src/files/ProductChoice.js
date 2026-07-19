import { useState } from "react";
import styles from "./ProductChoice.module.css";
import { collections } from "./prod";

const BagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);

const ProductChoice = ({ onAdd }) => {
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState("");
  const products = collections[active].products;

  const addProduct = (product) => {
    onAdd();
    setNotice(`${product.product_name} added to your bag`);
    window.clearTimeout(ProductChoice.noticeTimer);
    ProductChoice.noticeTimer = window.setTimeout(() => setNotice(""), 2400);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading} data-reveal>
        <div>
          <span className={styles.kicker}>Curated in London</span>
          <h2>The collection</h2>
        </div>
        <p>A considered edit for every expression of your daily ritual.</p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Product collections" data-reveal>
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            className={active === index ? styles.active : ""}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
          >
            <span>0{index + 1}</span>{collection.label}
          </button>
        ))}
      </div>

      <div className={styles.products} key={collections[active].id}>
        {products.map((product, index) => (
          <article className={styles.card} key={product.product_name} style={{ "--delay": `${index * 80}ms` }}>
            <div className={styles.imageWrap}>
              <img src={product.product_img} alt={product.product_name} />
              <div className={styles.cardIndex}>K / {String(index + 1).padStart(2, "0")}</div>
              <button onClick={() => addProduct(product)} aria-label={`Add ${product.product_name} to bag`}>
                <BagIcon /><span>Add to bag</span>
              </button>
            </div>
            <div className={styles.details}>
              <div><h3>{product.product_name}</h3><p>{product.note}</p></div>
              <strong>£{product.product_price}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className={`${styles.notice} ${notice ? styles.showNotice : ""}`} role="status" aria-live="polite">{notice}</div>
    </div>
  );
};

export default ProductChoice;
