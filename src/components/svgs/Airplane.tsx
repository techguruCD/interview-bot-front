import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const Airplane = ({ width, height, className }: Props) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      fill="currentColor"
      viewBox="0 0 100 125"
    >
      <path d="M51.71,53.08,12.57,56.86,2.24,89.9A5.12,5.12,0,0,0,9.36,96L95.25,54.4a4.89,4.89,0,0,0,0-8.79L9.36,4A5.12,5.12,0,0,0,2.24,10.1l10.32,33,39.14,3.79a3.09,3.09,0,0,1,0,6.15Z" />
    </svg>
  );
};

export default Airplane;
