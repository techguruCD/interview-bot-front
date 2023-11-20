import React from "react";
import { cn } from "./utils";

type Props = {
  loading: boolean;
};

const Spinner = ({ loading }: Props) => {
  return (
    <div
      className={cn({
        "opacity-100 fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/80 z-20 transition-opacity duration-300":
          true,
        "opacity-0 pointer-events-none": !loading,
      })}
    >
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Spinner;
