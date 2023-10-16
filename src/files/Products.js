import styles from "./Products.module.css";
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.slogan}>
          <div className={styles.sloganDecor}></div>
          Luxurious coffee beans that are cultured and raised in top-tier farms
          in Africa!
        </div>
        <div className={styles.btn}>
          <button> Order a coffee!</button>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.productImg}>
            <img src="/images/coffeebean.png"/>
          </div>
          <div className={styles.productDetail}>
            <div>Lux Coffee Beans</div>
            <div>We select the best premium coffee, for a true taste.</div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImg}>
          <img src="/images/cookie.png"/>
          </div>
          <div className={styles.productDetail}>
            <div>Delicious Cookies</div>
            <div>Enjoy your coffee with some hot cookies.</div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImg}>
          <img src="/images/coffeecup.png"/>
          </div>
          <div className={styles.productDetail}>
            <div>Enjoy at Home</div>
            <div>Enjoy the best coffee in the comfort of your home.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
