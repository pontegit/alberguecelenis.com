import React from "react";

export default function BookNowButton() {
  return (
    <a  className="btn button book_now"
      href="https://www.booking.com/hotel/es/albergue-celenis.html"
      title="Book some room"
    > 
      <span className="book_now_content">
        <img src="./icons/icon-house.svg" alt="" />
        Book now
      </span>
    </a>
  );
}
