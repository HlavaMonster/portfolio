import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ workData }) => {
  return (
    <section id="experience" className="page_section experience_section">
      <div className="content experience_content">
        <h2 className="section_title">
          <span>What I&apos;ve Done</span>
        </h2>
        <div className="section_content">
          {workData.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
