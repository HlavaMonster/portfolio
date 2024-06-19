import React from "react";

const Logo = ({ name, label }) => {
  return (
    <div className="logo">
      <h1>
        {name.split(" ")[0]}
        <span>{name.split(" ")[1]}</span>
      </h1>
      <h2>{label}</h2>
    </div>
  );
};

export default Logo;
