import Navbar from "./files/Navbar";
import styles from "./App.module.css";
import Home from "./files/Home";
import { useEffect, useState } from "react";
import Products from "./files/Products";
import ProductChoice from "./files/ProductChoice";
import Premium from "./files/Premium";
import Blog from "./files/Blog";
import { useRef } from "react";
import Footer from "./files/Footer";
function App() {
  const [col, setCol] = useState(false);
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const premiumRef = useRef(null);
  const blogRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setCol(true);
      } else {
        setCol(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 



  const scrollToSection = (sectionIndex) => {
    let sectionRef;

    switch (sectionIndex) {
      case 0:
        sectionRef = homeRef;
        break;
      case 1:
        sectionRef = productsRef;
        break;
      case 2:
        sectionRef = premiumRef;
        break;
      case 3:
        sectionRef = blogRef;
        break;
      default:
        sectionRef = homeRef;
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };




  return (
    <div className={styles.page_container}>
      <Navbar col={col} setWindow={scrollToSection} />

      <div className={styles.page_details}>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={productsRef}>
          <Products /> <ProductChoice />
        </div>
        <div  ref={premiumRef}>
          <Premium />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
