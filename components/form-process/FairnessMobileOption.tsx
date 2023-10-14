import { useFormContext } from "@/contexts/FormContext";
import React from "react";

interface IFairnessMobileOption {
  svg: React.ReactNode;
  name: string;
  value: string;
}

const FairnessMobileOption: React.FC<IFairnessMobileOption> = ({
  svg,
  name,
  value,
}) => {
  const { formValues, setValue } = useFormContext();
  const onClick = () => {
    setValue("process", value);
  };
  return (
    <div
      onClick={onClick}
      className={`mb-3 flex items-center justify-between border border-grey-mid px-3 py-4 ${
        formValues.process == value ? "shadow-strong" : ""
      }`}
    >
      <div className="flex items-center gap-3 font-bold">
        {svg}
        <p className="font-secondary">{name}</p>
      </div>

      <div className="flex items-center">
        <label className="radioCtn">
          <input
            checked={formValues.process == value}
            value={value}
            type="radio"
            name={"fairness"}
            onChange={() => {}}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default FairnessMobileOption;
