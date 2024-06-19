import React from "react";

const Button = ({ clickHandler, children }) => {
  return (
    <button onClick={clickHandler} className="button">
      {children}
    </button>
  );
};

export default Button;
