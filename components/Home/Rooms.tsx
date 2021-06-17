import React from "react";

export default function Rooms() {
  return (
    <div id="rooms" className="rooms">
      <h3 className="rooms_title">
        Dorms feature bunk beds, linens and free Wi-Fi, plus en suite bathrooms.
        Laundry with washer/dryer and comunal kitchen. Private rooms are also
        available.
      </h3>
      <div className="rooms_content">
        {[
          {
            id: "private",
            photo: <img src="/assets/photos/private.jpeg" />,
            name: "Private bedroom",
            explanation:
              "If you need privacy we offer you private rooms with double size bed and private bathroom. The rest of the services are included.",
          },
          {
            id: "bulk",
            photo: <img src="/assets/photos/bunk_z.jpg" />,
            name: "Confy bunk beds ",
            explanation: "",
          },
        ].map((room) => {
          return (
            <div className="rooms_room" key={room.id}>
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
