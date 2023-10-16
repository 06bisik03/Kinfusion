import styles from "./ProductChoice.module.css";
import { cakes, coffeeProds, delicaciesProd } from "./prod";
import { useEffect, useState } from "react";
const ProductChoice = () => {
  const [active, setActive] = useState(0);
  const [prods, setProds] = useState(delicaciesProd);
  useEffect(() => {
    if (active === 0) {
      setProds(delicaciesProd);
    } else if (active === 1) {
      setProds(coffeeProds);
    } else {
      setProds(cakes);
    }
  }, [active]);
  return (
    <div className={styles.container}>
      <div className={styles.choiceBars}>
        <div
          className={styles.choice}
          onClick={() => setActive(0)}
          style={{ borderBottom: active === 0 ? "1px solid black" : "none" }}>
          <div>Delicacies</div>
          <div>4 products</div>
        </div>
        <div
          className={styles.choice}
          onClick={() => setActive(1)}
          style={{ borderBottom: active === 1 ? "1px solid black" : "none" }}>
          <div>Coffee and hot drinks</div>
          <div>4 products</div>
        </div>
        <div
          className={styles.choice}
          onClick={() => setActive(2)}
          style={{ borderBottom: active === 2 ? "1px solid black" : "none" }}>
          <div>Cakes</div>
          <div>4 products</div>
        </div>
      </div>
      <div className={styles.products}>
        {prods.map((item, index) => {
          return <ShowRelatedItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ProductChoice;
const ShowRelatedItem = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImg}>
        <img src={item.product_img} />
      </div>
      <div className={styles.itemDetails}>
        <div>
          <div>{item.product_name}</div>
          <div>$ {item.product_price}</div>
        </div>

        <div className={styles.product_add}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white"height="1.5em" viewBox="0 0 448 512"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>
        </div>
      </div>
    </div>
  );
};
