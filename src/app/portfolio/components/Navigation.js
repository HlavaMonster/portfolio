"use client";

import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main_navigation">
      <button className="nav_toggle" onClick={toggleNavigation}>
        <span className="sr-only">Menu</span>
        <i className="fa fa-bars fa-3x" />
      </button>
      <ul className={isOpen ? "nav_open" : ""}>
        <li>
          <a onClick={toggleNavigation} href="#about">
            About Me
          </a>
        </li>
        <li>
          <a onClick={toggleNavigation} href="#experience">
            What I&apos;ve Done
          </a>
        </li>
        <li>
          <a onClick={toggleNavigation} href="#skills">
            What I Know
          </a>
        </li>
        <li>
          <a onClick={toggleNavigation} href="#education">
            Education
          </a>
        </li>
        <li>
          <a onClick={toggleNavigation} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a onClick={toggleNavigation} href="resume/Dustin_Hlava_Resume.pdf">
            Download PDF
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
