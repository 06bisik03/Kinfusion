import styles from "./Blog.module.css";
const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.decor} />
        Our trending Blogs for this week!
      </div>
      <div className={styles.details}>
        <div className={styles.blog}>
          <div className={styles.blogImg}>
            <img alt="x"src="https://images.alphacoders.com/129/1290988.jpg" />
          </div>
          <div className={styles.blogDetails}>
            <div className={styles.blogTitle}>10 Coffee Recommendations</div>
            <div className={styles.blogText}>
              Blogs about coffee will help you learn about how it is prepared,
              its waiting time, all what it takes for the best quality coffee.
            </div>
            <div className={styles.info}>
              <div>
                <i class="fa fa-eye"></i>
                24.9K
              </div>
              <div>
                <i class="fa fa-comment"></i>
                89
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.blogImg}>
            <img alt="x" src="https://wallpapers.com/images/featured/cup-of-coffee-4tc627vmaw0tiqiv.jpg" />
          </div>
          <div className={styles.blogDetails}>
            <div className={styles.blogTitle}>
              12 Benefits of Coffee You did not know
            </div>
            <div className={styles.blogText}>
              Here are a few things to know about some of the benefits of coffee
              that you probably did not know until now! What you are about to
              read will blow your mind!
            </div>
            <div className={styles.info}>
              <div>
                <i class="fa fa-eye"></i>
                24.9K
              </div>
              <div>
                <i class="fa fa-comment"></i>
                89
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
