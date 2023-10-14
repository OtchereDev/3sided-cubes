import { useFormContext } from "@/contexts/FormContext";
import React from "react";

interface IFairnessLgOption {
  name: string;
  svg: React.ReactNode;
  value: string;
}

const FairnessLgOption: React.FC<IFairnessLgOption> = ({
  name,
  svg,
  value,
}) => {
  const { formValues, setValue } = useFormContext();
  const onClick = () => setValue("process", value);

  return (
    <div>
      <div
        onClick={onClick}
        className={`mx-auto flex h-[60px] cursor-pointer w-[60px] items-center justify-center bg-grey-light ${
          formValues.process == value ? "border-4 border-primary-pink" : ""
        }`}
      >
        {svg}
      </div>
      <p
        onClick={onClick}
        className={`mt-3 text-center ${
          formValues.process == value ? "font-bold" : ""
        } text-[#333333]  font-secondary cursor-pointer`}
      >
        {name}
      </p>
    </div>
  );
};

export default FairnessLgOption;
