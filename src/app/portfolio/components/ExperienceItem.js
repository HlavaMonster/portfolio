import React from "react";
import Moment from "moment";

const HighlightList = ({ highlights }) => {
  return (
    <ul className="highlight_list">
      {highlights.map((highlight, index) => (
        <li key={index} className="highlight">
          {highlight}
        </li>
      ))}
    </ul>
  );
};

const ExperienceItem = ({
  item: { name, location, startDate, endDate, highlights, url, position },
}) => {
  return (
    <div className="resume_item experience_item">
      <h3>
        <a href={url}>{name}</a>
      </h3>
      <div className="item_details">
        <div className="item_details_title">{position}</div>
        {location} &bull; {Moment(startDate).format("MMMM YYYY")} -{" "}
        {endDate ? Moment(endDate).format("MMMM YYYY") : "Current"}
      </div>
      <HighlightList highlights={highlights} />
    </div>
  );
};

export default ExperienceItem;
