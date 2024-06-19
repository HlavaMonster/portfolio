import React from "react";

const SocialMedia = ({ profiles, showUsername, displayStyle }) => {
  const mapIcon = (network) => {
    if (network === "email") {
      return <i className="fa fa-envelope fa-3x" />;
    }
    return <i className={`fa fa-${network} fa-3x`} />;
  };

  const displayClass = displayStyle ? `socialmedia_list_${displayStyle}` : "";
  return (
    <ul className={`socialmedia_list ${displayClass}`}>
      {profiles.map((profile, index) => (
        <li key={index}>
          <a
            href={
              profile.network.toLowerCase() === "email"
                ? `mailto:${profile.url}`
                : profile.url
            }
          >
            {mapIcon(profile.network.toLowerCase())}
            {showUsername ? profile.username : ""}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
