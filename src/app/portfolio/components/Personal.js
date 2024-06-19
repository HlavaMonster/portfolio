import React from "react";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Personal = ({ basicsData }) => {
  return (
    <section id="about" className="page_section personal_container">
      <div className="content personal_content">
        <Logo name={basicsData.name} label={basicsData.label} />
        <div className="about_me">
          <div className="portrait"></div>
          <p>{basicsData.summary}</p>
        </div>
        <div className="contact_details">
          <SocialMedia
            profiles={basicsData.profiles}
            displayStyle="stacked"
            showUsername="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Personal;
