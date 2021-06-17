import React from "react";
import BookNowButton from "../Buttons/BookNowButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_text">
        <div>
          <div className="hero_text_welcome">Welcome to</div>
          <h1 className="hero_text_name">Celenis</h1>
          <h2 className="hero_text_subname">Hostel</h2>
          <div className="hero_text_legend">
            A place to rest at Caldas de Reis <br />
            in the Porguesse Camino of St. James.
          </div>
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
