import React, { useEffect, useRef, useState } from "react";
import { SelectArrow } from "./icons";

interface ISelect {
  options: { value: string; text: string }[];
  containerClassName: string;
}

const Select: React.FC<ISelect> = ({ options, containerClassName }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px";
      } else if (!isOpen && contentRef.current) {
        contentRef.current.style.maxHeight = 0 + "px";
      }
    }
  }, [isOpen]);
  return (
    <div className={`${containerClassName} relative z-10`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between border border-grey-mid px-3 py-3"
      >
        <p className="font-secondary">Select Option</p>
        <SelectArrow
          className={` ${
            isOpen ? "rotate-180" : "rotate-0"
          } duration-300 transition-all`}
        />
      </div>
      <div className="absolute top-full left-0 w-full z-10">
        <div
          ref={contentRef}
          className={` accordion-item-content max-h-0 overflow-hidden bg-grey-light`}
        >
          {options.map((option) => (
            <div
              onClick={() => setIsOpen(!isOpen)}
              key={option.value}
              className="border-b-2 border-white px-3 py-3 font-secondary"
            >
              <p>{option.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
