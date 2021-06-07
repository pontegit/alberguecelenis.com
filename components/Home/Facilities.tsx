import React from "react";

export default function Facilities() {
  return (
    <div id="facilities" className="facilities">
      <h3 className="facilities_title">Facilities</h3>
      <div className="facilities_content">
        {[
          {
            icon: <img src="./icons/facilities-washer.svg" />,
            title: "Washer & Dryer",
            subtitle: "Facility description goes here, temporary text",
          },
          {
            icon: <img src="./icons/facilities-shower.svg" />,
            title: "Shared showers",
            subtitle: "Facility description goes here, temporary text",
          },
          {
            icon: <img src="./icons/facilities-kitchen.svg" />,
            title: "Kitchen apparels",
            subtitle: "Facility description goes here, temporary text",
          },
          {
            icon: <img src="./icons/facilities-landscape.svg" />,
            title: "Amazing environment",
            subtitle: "Facility description goes here, temporary text",
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
