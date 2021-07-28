import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header_links">
          <a className="header_link-phone" href="tel:0034650-714-355">
            📞 +34 613 116 894
          </a>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Albergue-Celenis-103833938584978"
                title="Visit our Facebook page"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <img src="./icons/social-facebook.svg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alberguecelenis"
                title="Visit our Twitter profile"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <img src="./icons/social-twitter.svg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alberguecelenis"
                title="Visit our Instagram profile"
                target="_blank"
              >
                <div className="footer_group_social_image">
                  <img src="./icons/social-instagram.svg" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/#" className="header_logo">
            <img src="./logos/logo-blue-center.svg" alt="" />
          </a>
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <a href="/#rooms" title="Ver información sobre la habitaciones">
                Habitaciones
              </a>
            </li>
            <li>
              <a href="/#facilities" title="Ver información de los servicios">
                Servicios
              </a>
            </li>
            {/* <li>
              <a href="/#contact-us">Contact us</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
