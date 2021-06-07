import React from "react";
import BookNowButton from "../Buttons/BookNowButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_text">
        <div>
          <span className="hero_text_welcome">Welcome to</span>
          <h1 className="hero_text_name">Celenis</h1>
          <h2 className="hero_text_subname">Hostel</h2>
          <span className="hero_text_legend">
            A place to rest at Caldas de Reis <br />
            in the Porguese Way of St. James.
          </span>
        </div>
      </div>
      <div className="hero_footer">
        <div>
          <BookNowButton />
        </div>
        <div className="btn btn--rounded">‹</div>
        {/* <div>Scroll</div> */}
      </div>
    </div>
  );
}
