import React from "react";
import GoogleMapReact from "google-map-react";

const WasteAreaMap = () => {
  const defaultProps = {
    center: {
      lat: 6.335,
      lng: 5.6037,
    },
    zoom: 14,
  };
  return (
    <>
      <div>
        <p className="fw-600 lg:fs-700 border-b pb-2">Waste Areas</p>
        <div className="lg:h-[400px] mt-12">
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
                ? process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
                : "",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* <AnyReactComponent
          lat={6.458985}
          lng={3.601521}
        /> */}
          </GoogleMapReact>
        </div>
        </div>
      </div>
    </>
  );
};

export default WasteAreaMap;
