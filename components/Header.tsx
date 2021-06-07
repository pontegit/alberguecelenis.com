import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="page-wrapper">
        <div className="header_logo">
          <img src="./logos/logo-blue-center.svg" alt="" />
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
