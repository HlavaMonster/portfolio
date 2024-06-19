import React from "react";
import Moment from "moment";

const EducationItem = ({ item }) => {
  return (
    <div className="resume_item education_item">
      <h3>
        <a href="https://www.purdue.edu">{item.institution}</a>
      </h3>
      <div className="item_details">
        <div className="item_details_title">
          {item.studyType} in {item.area}
        </div>
        {item.institutionLocation} &bull;{" "}
        {Moment(item.startDate).format("MMMM YYYY")} -{" "}
        {Moment(item.endDate).format("MMMM YYYY")}
        <ul className="highlight_list">
          <li className="highlight">{item.gpa}</li>
          <li className="highlight">{item.other}</li>
        </ul>
      </div>
    </div>
  );
};

export default EducationItem;
