import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_left}>
        <div className={styles.home_left_content}>
          <div className={styles.home_left_slogan}>
            <div>Awake your senses with each cup of coffee</div>
            <div className={styles.home_left_inc}>
              Treat yourself with our delicious and lux coffee!
            </div>
          </div>
          <div className={styles.home_left_details}>
            <div className={styles.home_left_detail}>
              <div className={styles.home_left_detail_title}>139,342</div>
              <div className={styles.home_left_detail_expl}>
                <div>Testimonials</div>
                <div>
                  From customers whose trust we have gained over the years.
                </div>
              </div>
            </div>
            <div className={styles.home_left_detail}>
              <div className={styles.home_left_detail_title}>50+</div>
              <div className={styles.home_left_detail_expl}>
                <div>Exclusive Products</div>
                <div>Premium and lux coffee custom made for you.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home_right}></div>
    </div>
  );
};
export default Home;
