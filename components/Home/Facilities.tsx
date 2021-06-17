import React from "react";

export default function Facilities() {
  return (
    <div id="facilities" className="facilities">
      <h3 className="facilities_title">Facilities</h3>
      <div className="facilities_content">
        {[
          {
            id: "washer",
            icon: <img src="./icons/facilities-washer.svg" />,
            title: "Washer & Dryer",
            subtitle:
              "We have our own self-service laundry, where you can take care of your clothers.",
          },
          {
            id: "showers",
            icon: <img src="./icons/facilities-shower.svg" />,
            title: "Shared showers",
            subtitle:
              "Shared showers are available with your bunk beds. If you get a private room you will have your private bathroom.",
          },
          {
            id: "kitchen",
            icon: <img src="./icons/facilities-kitchen.svg" />,
            title: "Kitchen apparels",
            subtitle:
              "Do you want to heat or prepare something to eat, we have kitchena apparels for you.",
          },
          {
            id: "environment",
            icon: <img src="./icons/facilities-landscape.svg" />,
            title: "Amazing environment",
            subtitle:
              "You will be surrounded by amazing environment, without no hussle, just simple rest.",
          },
        ].map((facility) => {
          return (
            <div className="facilities_facility">
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
