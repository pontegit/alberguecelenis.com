import React from "react";

export default function Facilities() {
  return (
    <div id="facilities" className="facilities">
      <h3 className="facilities_title">Servicios</h3>
      <div className="facilities_content">
        {[
          {
            id: "washer",
            icon: (
              <img
                width="100"
                height="100"
                src="./icons/facilities-washer.svg"
              />
            ),
            title: "Lavadora y secadora",
            subtitle:
              "Tenemos nuestra propia lavanderia self-service, donde puedes cuidar tu ropa.",
          },
          {
            id: "showers",
            icon: (
              <img
                width="100"
                height="100"
                src="./icons/facilities-shower.svg"
              />
            ),
            title: "Duchas compartidas",
            subtitle:
              "Contamos con duchas compartidas para las literas. Si tu habitación es privada cuentas con baño privado.",
          },
          {
            id: "kitchen",
            icon: (
              <img
                width="100"
                height="100"
                src="./icons/facilities-kitchen.svg"
              />
            ),
            title: "Cocina",
            subtitle:
              "Necesitas calentar o preparar algo para comer, contamos con electrodomésticos.",
          },
          {
            id: "environment",
            icon: (
              <img
                width="100"
                height="100"
                src="./icons/facilities-landscape.svg"
              />
            ),
            title: "Entorno increíble",
            subtitle:
              "Estarás rodeado de un entorno increíble, sin ninguna molestia ni ruídos, simplemente descanso.",
          },
        ].map((facility) => {
          return (
            <div className="facilities_facility" key={facility.id}>
              <div className="facilities_facility_image">{facility.icon}</div>
              <div className="facilities_facility_title">{facility.title}</div>
              <div className="facilities_facility_subtitle">
                {facility.subtitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
