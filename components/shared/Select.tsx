import React, { useEffect, useRef, useState } from "react";
import { SelectArrow } from "./icons";
import { ISelectOption } from "@/types/select";
import { getSelectDisplay } from "@/utils/getSelectDisplay";
import { count } from "console";
import FormError from "./FormError";

interface ISelect {
  options: ISelectOption[];
  containerClassName: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  initialValue?: string;
}

const Select: React.FC<ISelect> = ({
  options,
  containerClassName,
  onBlur,
  error,
  initialValue,
  onChange,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [selectValue, setSelectValue] = useState(initialValue);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = "220px";
        contentRef.current.style.overflow = "scroll";
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
    if (selectValue != initialValue) {
      if (onChange) {
        onChange(selectValue as string);
      }
      if (onBlur) {
        onBlur();
      }
      setIsOpen(false);
    }
  }, [selectValue, error]);

  useEffect(() => {
    setSelectValue(initialValue);
  }, [initialValue]);

  return (
    <>
      <div className={`${containerClassName} relative z-10`}>
        <div
          aria-description="Select box"
          onClick={() => {
            setIsOpen(!isOpen);
            setClickCount(clickCount + 1);
          }}
          className={`flex cursor-pointer items-center justify-between border ${
            error?.length ? "form-field-error " : "border-grey-mid"
          } px-3 py-3`}
        >
          <p className="font-secondary">
            {getSelectDisplay(options, selectValue) ?? "Select Option"}
          </p>
          <SelectArrow
            className={` ${
              isOpen ? "rotate-180" : "rotate-0"
            } duration-300 transition-all`}
          />
        </div>
        <div className="absolute top-full left-0 w-full z-10">
          <div
            ref={contentRef}
            className={` accordion-item-content max-h-0 overflow-hidden bg-grey-light z-100 relative`}
          >
            <div
              onClick={() => {
                setSelectValue("");
                setClickCount(clickCount + 1);
              }}
              className=" custom-select-option"
            >
              <p>Select Option</p>
            </div>
            {options.map((option) => (
              <div
                onClick={() => {
                  setSelectValue(option.value);
                  setClickCount(clickCount + 1);
                }}
                key={option.value}
                className="custom-select-option"
              >
                <p>{option.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormError error={error as string} />
    </>
  );
};

export default Select;
