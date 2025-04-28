import React from "react";
import "./latestNews.css";

const LatestNews = () => {
  return (
    <section className="latest-news">
      <h2>Latest News</h2>
      <div className="news-grid">
        <div className="card hover-move">News Card 1</div>
        <div className="card hover-move">News Card 2</div>
        <div className="card hover-move">News Card 3</div>
      </div>
    </section>
  );
};

export default LatestNews;