import React from "react";
import { BeatLoader, PropagateLoader, PulseLoader } from "react-spinners";
import { Circles } from "react-loader-spinner";

export const ScaleSpinner = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  const override: any = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    padding: "3px 0px 22px",
  };
  return (
    <PropagateLoader
      color={color}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const FadeSpinner = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <BeatLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const PulseSpinner = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <PulseLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const CircleLoader = ({size}:{size:string}) => {
  return (
    <div>
      <Circles
        height={size}
        width={size}
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
