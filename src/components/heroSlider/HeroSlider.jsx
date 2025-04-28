import React, { useEffect, useState } from "react";
import "./heroSlider.css";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";

const images = [
  slide1, slide2, slide3
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <img src={images[current]} alt="Hero Slide" className="fade-in" />
    </section>
  );
};

export default HeroSlider;