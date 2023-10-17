import styles from "./Premium.module.css";
import btnStyles from './Products.module.css';
const Premium = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.decor} />
        <div className={styles.text}>
          Premium Kinfusion Espresso and Coffee Beans, that are custom made for
          you and only you!
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.images}>
          <img alt="x"src="/images/cif2.avif" />
          <img alt="x"src="/images/ddd.webp" />
        </div>
        <div className={styles.expl}>
          <div className={styles.productName}>
            <div className={styles.decor2} />
            <div>Kinfusion Premium Lux Beans</div>
          </div>
          <div className={styles.price}>
            <div>$89.99</div>
            <div>
              The Kinfusion Premium coffee beans are grown with special care in
              Africa with the best farmers to ever exist. With centuries old
              coffee grinding technique expierence we bring out the most flavor
              out of a coffee you can ever wish for.
            </div>
          </div>
          <div className={styles.btn}>
                <button className={btnStyles.btnn}>Buy Now!</button>
  
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Premium;
