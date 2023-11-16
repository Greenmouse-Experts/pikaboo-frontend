import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";

interface Props {
  close: () => void;
  item: any;
}
const MapAssigning: FC<Props> = ({ close, item }) => {
  const AnyReactComponent = ({ text }: any) => (
    <div>
      {text}
      <MdLocationOn className="text-5xl text-primary" />
    </div>
  );
  const defaultProps = {
    center: {
      lat: 6.335,
      lng: 5.6037,
    },
    zoom: 14,
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 index-30 w-full h-screen flex items-center justify-center bg-modal"
        onClick={close}
      >
        <div
          className="w-10/12 h-[90vh] bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 h-[50px] flex items-center bg-primary">
            <p className="fw-600 text-lg text-white">
              Assigning Service Personnel
            </p>
          </div>
          <div className="flex h-[calc(100%-50px)]">
            <div className="w-[25%] h-full">
                <div className="pt-6 pl-4 bg-light border-b-2 border-gray-600">
                    <p className="fw-600 text-lg">Personnel List</p>
                </div>
            </div>
            <div className="w-[75%]">
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
                  <AnyReactComponent
                    lat={6.5798144}
                    lng={3.3488896}
                    text={"Greenmouse"}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapAssigning;
