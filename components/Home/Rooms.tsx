import React from "react";

export default function Rooms() {
  return (
    <div id="rooms" className="rooms">
      <h3 className="rooms_title">
        All our room types are including complementary breakfast
      </h3>
      <div className="rooms_content">
        {[
          {
            photo: <img src="./icons/rooms-private.png" />,
            name: "Private bedroom",
            explanation:
              "Our rooms are designed to transport  you into an environment made for leisure. Take your mind off the day-to-day of home  life and find a private paradise for yourself.",
          },
          {
            photo: <img src="./icons/rooms-bulk.png" />,
            name: "Confy bunk beds ",
            explanation:
              "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. ",
          },
        ].map((room) => {
          return (
            <div className="rooms_room">
              <div className="rooms_room_image">{room.photo}</div>
              <div className="rooms_room_info">
                <div className="rooms_room_info_title">{room.name}</div>
                <div className="rooms_room_info_subtitle">
                  {room.explanation}
                </div>
                <button className="rooms_room_info_button button button--small">
                  Explore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
