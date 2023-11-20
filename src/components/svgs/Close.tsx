import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const CloseSvg = ({ width, height, className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      stroke="currentColor"
    >
      <path
        d="M2 8L8 2M2 2L8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseSvg;
