import React from "react";
import './sideBar.scss';

const nav = (
  <nav>
    <ul>
      <li>
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
    </ul>
  </nav>
);

const SideBar = () => {
  return (
    <header className="header">
      {nav}
      <div className="header_btn-cont">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default SideBar;
