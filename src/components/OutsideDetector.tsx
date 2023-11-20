import React, { useRef, useEffect } from "react";

type propTypes = {
  children: React.ReactNode;
  onOutsideClick: () => void;
};

const OutsideDetector = ({
  children,
  onOutsideClick: handleOutsideClick,
}: propTypes) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        handleOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideDetector;
