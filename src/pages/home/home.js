import React from "react";
import LatestNews from "../../components/gameReviews/GameReviews";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import GameReviews from "../../components/latestNews/LatestNews";
import HypeTrain from "../../components/hypeTrain/HypeTrain"
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      <HeroSlider />
      <LatestNews />
      <GameReviews />
      <HypeTrain />
    </main>
  );
};

export default Home;