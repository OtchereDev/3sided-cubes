import React from "react";

interface IFairnessMobileOption {
  svg: React.ReactNode;
  name: string;
}

const FairnessMobileOption: React.FC<IFairnessMobileOption> = ({
  svg,
  name,
}) => {
  return (
    // TODO: remove shadow but only add if selected
    <div className="mb-3 flex items-center justify-between border border-grey-mid px-3 py-4 shadow-light">
      <div className="flex items-center gap-3 font-bold">
        {svg}
        <p className="font-secondary">{name}</p>
      </div>

      <div className="flex items-center">
        <label className="radioCtn">
          <input type="radio" name={"fairness"} />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default FairnessMobileOption;
