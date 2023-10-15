import styles from "./Navbar.module.css";
const Navbar = ({ col }) => {
  console.log(col);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: col === true ? "white" : "transparent", color: col === true ? "black" : "white" }}>
      <div className={styles.elements}>
        <div className={styles.brand}>Kinfusion</div>
        <div className={styles.navigation}>
          <div>Home</div>
          <div>Products</div>
          <div>Premium</div>
          <div>Blog</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
