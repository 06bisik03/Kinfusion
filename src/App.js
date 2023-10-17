import Navbar from "./files/Navbar";
import styles from "./App.module.css";
import Home from "./files/Home";
import  { useEffect, useState } from 'react';
import Products from "./files/Products";
import ProductChoice from "./files/ProductChoice";
import Premium from "./files/Premium";
import Blog from "./files/Blog";
import Footer from "./files/Footer";
function App() {
  const [col, setCol] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setCol(true);
      } else {
        setCol(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.page_container}>
      <Navbar col={col}/>

      <div className={styles.page_details}>
        <Home />
        <Products />
        <ProductChoice />
        <Premium />
        <Blog />
        <Footer />

      </div>
    </div>
  );
}

export default App;
