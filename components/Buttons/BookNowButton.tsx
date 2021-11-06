import React from "react";

export default function BookNowButton() {
  return (
    <a
      className="btn button book_now ibe"
      href="#"
      target="_blank"
      title="Book some room"
      data-region="emea"
      data-channelcode="alberguecelenisdirect"
    >
      <span className="book_now_content">
        <img
          loading="lazy"
          width="20"
          src="./icons/icon-house.svg"
          alt="Book now"
        />
        Reservar ahora
      </span>
    </a>
  );
}
