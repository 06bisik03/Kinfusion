import styles from "./Navbar.module.css";
const Navbar = ({ col,setWindow }) => {

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: col === true ? "white" : "transparent", color: col === true ? "black" : "white" }}>
      <div className={styles.elements}>
        <div className={styles.brand}>Kinfusion</div>
        <div className={styles.navigation}>
          <div onClick={() => setWindow(0)}>Home</div>
          <div onClick={() => setWindow(1)}>Products</div>
          <div onClick={() => setWindow(2)}>Premium</div>
          <div onClick={() => setWindow(3)}>Blog</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
