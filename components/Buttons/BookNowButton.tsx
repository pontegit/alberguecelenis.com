import React from "react";

export default function BookNowButton() {
  return (
    <button className="btn button book_now">
      <a
        href="https://www.booking.com/hotel/es/albergue-celenis.html"
        title="Book some room"
        className="book_now_content"
      >
        <img src="./icons/icon-house.svg" alt="" />
        Book now
      </a>
    </button>
  );
}
