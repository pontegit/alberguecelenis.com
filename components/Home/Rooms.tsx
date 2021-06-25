import React from "react";

export default function Rooms() {
  return (
    <div id="rooms" className="rooms">
      <h3 className="rooms_title">
        Habitación privada o camas literas, sábanas y Wi-Fi gratis, así como
        cómodos baños. Lavandería con lavadora y secadora y cocina comunitaria.
      </h3>
      <div className="rooms_content">
        {[
          {
            id: "private",
            photo: <img src="/assets/photos/private.jpeg" />,
            name: "Habitación privada",
            explanation:
              "Si necesitas privacidad te ofrecemos habitación privada con cama doble así como baño privado. El resto de servicios están incluídos.",
          },
          {
            id: "bulk",
            photo: <img src="/assets/photos/bunk_z.jpg" />,
            name: "Cómodas literas dobles",
            explanation:
              "Excelentes habitaciones compatidsa en camas litera con todos los servicios, perfectas para un descanso completo en el Camino de Santiago",
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
