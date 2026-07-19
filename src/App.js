import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./files/Navbar";
import Home from "./files/Home";
import Products from "./files/Products";
import ProductChoice from "./files/ProductChoice";
import Premium from "./files/Premium";
import Blog from "./files/Blog";
import Footer from "./files/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const premiumRef = useRef(null);
  const blogRef = useRef(null);

  const refs = {
    home: homeRef,
    products: productsRef,
    premium: premiumRef,
    blog: blogRef,
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!window.IntersectionObserver) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6%" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addToBag = () => setBagCount((count) => count + 1);

  return (
    <div className={styles.page}>
      <Navbar scrolled={scrolled} onNavigate={scrollToSection} bagCount={bagCount} />

      <main>
        <section ref={homeRef} className={styles.anchor}>
          <Home onNavigate={scrollToSection} />
        </section>

        <section ref={productsRef} className={styles.anchor}>
          <Products onNavigate={scrollToSection} />
          <ProductChoice onAdd={addToBag} />
        </section>

        <section ref={premiumRef} className={styles.anchor}>
          <Premium onAdd={addToBag} />
        </section>

        <section ref={blogRef} className={styles.anchor}>
          <Blog />
        </section>
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
