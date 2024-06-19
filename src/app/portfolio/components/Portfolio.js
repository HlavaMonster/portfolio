import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ workData }) => {
  return (
    <section id="portfolio" className="page_section portfolio_container">
      <div className="content portfolio_content">
        <h2 className="section_title">
          <span>Portfolio</span>
        </h2>
        <div className="section_content portfolio_items">
          {workData.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
