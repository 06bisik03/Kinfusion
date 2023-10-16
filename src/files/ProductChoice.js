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
        <div>{item.product_name}</div>
        <div>$ {item.product_price}</div>
        
        
      </div>
    </div>
  );
};
