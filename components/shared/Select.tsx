import React, { useEffect, useRef, useState } from "react";
import { SelectArrow } from "./icons";

interface ISelect {
  options: { value: string; text: string }[];
  containerClassName: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  value: string;
}

const Select: React.FC<ISelect> = ({
  options,
  containerClassName,
  onBlur,
  error,
  value,
  onChange,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [selectValue, setSelectValue] = useState(value);

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

  useEffect(() => {
    if (clickCount > 1 && onBlur) {
      onBlur();
    }
  }, [clickCount]);

  useEffect(() => {
    if (selectValue != "") {
      if (onChange) {
        onChange(selectValue);
      }
      if (onBlur) {
        onBlur();
      }
      setIsOpen(!isOpen);
    }
    console.log({ selectValue, error });
  }, [selectValue, error]);
  return (
    <>
      <div className={`${containerClassName} relative z-10`}>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            setClickCount(1);
          }}
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
                onClick={() => {
                  setSelectValue(option.value);
                }}
                key={option.value}
                className="border-b-2 cursor-pointer border-white px-3 py-3 font-secondary"
              >
                <p>{option.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>{error}</p>
    </>
  );
};

export default Select;
