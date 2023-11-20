import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const Arrow = ({ width, height, className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

export default Arrow;
