import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = ({ basicsData }) => {
  return (
    <footer className="page_section footer">
      <div className="content footer_content">
        <SocialMedia profiles={basicsData.profiles} />
      </div>
    </footer>
  );
};

export default Footer;
