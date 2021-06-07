import React from "react";
import BookNowButton from "../Buttons/BookNowButton";

import "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="footer" className={`footer`}>
      <div className="footer_group_wrapper page-wrapper">
        <div className="footer_group">
          <h3>Celenis</h3>
          <h4>Hostel</h4>
          <div className="footer_group_info_address">
            Address XX, Caldas de Reis
          </div>
          <div className="footer_group_info_phone">+34 XXX XXX XXX</div>
          <div className="footer_group_info_email">
            &#097;&#108;&#098;&#101;&#114;&#103;&#117;&#101;&#101;&#108;&#101;&#110;&#105;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </div>
        </div>
        <div className="footer_group footer_group_social">
          <ul>
            <li>
              <img src="./icons/social-facebook.svg" alt="" />
              Facebook
            </li>
            <li>
              <img src="./icons/social-twitter.svg" alt="" />
              Twitter
            </li>
            <li>
              <img src="./icons/social-instagram.svg" alt="" />
              Instagram
            </li>
          </ul>
        </div>
        <div className="footer_group footer_grous_links">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Terms &amp; conditions</li>
          </ul>
        </div>
        <div className="footer_group footer_grous_button">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
