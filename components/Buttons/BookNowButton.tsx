import React from "react";

export default function BookNowButton() {
  return (
    <a
      className="btn button book_now ibe"
      href="#"
      title="Book some room"
      data-region="emea"
      data-channelcode="alberguecelenisdirect"
    >
      <span className="book_now_content">
        <img src="./icons/icon-house.svg" alt="" />
        Reservar ahora
      </span>
    </a>
  );
}
