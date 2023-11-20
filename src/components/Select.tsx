import React from "react";
import OutsideDetector from "./OutsideDetector";
import ArrowDown from "./svgs/ArrowDown";

type Option = {
  title: string;
  value: string;
};

type Props = {
  data: Array<Option>;
  current: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
};

const getTitleFromValue = (data: Array<Option>, value: string) => {
  return data.find((item) => item.value === value)?.title || "";
};

const Select = ({
  data,
  current,
  placeholder = "Choose one",
  onChange: handleChange,
  className,
}: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <OutsideDetector onOutsideClick={() => setOpen(false)}>
      <div x-data="select" className={`${className} relative w-[30rem]`}>
        <button
          onClick={() => setOpen(!open)}
          className={`${
            open && "ring-blue-600"
          } flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300`}
        >
          <span>{getTitleFromValue(data, current) || placeholder}</span>
          <div className="text-gray-600">
            <ArrowDown width={14} className="mr-2" />
          </div>
        </button>

        {open && (
          <ul className="z-2 absolute mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300">
            {data &&
              data.map((item, index) => (
                <li
                  className="cursor-pointer select-none p-2 hover:bg-gray-200"
                  onClick={() => {
                    setOpen(false);
                    handleChange(item.value);
                  }}
                  key={index}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        )}
      </div>
    </OutsideDetector>
  );
};

export default Select;
