import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ educationData }) => {
  return (
    <section id="education" className="page_section education_container">
      <div className="content education_content">
        <h2 className="section_title">
          <span>Education</span>
        </h2>
        <div className="section_content">
          {educationData.map((item, index) => (
            <EducationItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
