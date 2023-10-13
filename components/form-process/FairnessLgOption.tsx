import React from "react";

interface IFairnessLgOption {
  name: string;
  svg: React.ReactNode;
}

const FairnessLgOption: React.FC<IFairnessLgOption> = ({ name, svg }) => {
  return (
    <div>
      <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center bg-grey-light">
        {svg}
      </div>
      <p className="mt-3 text-center font-secondary">{name}</p>
    </div>
  );
};

export default FairnessLgOption;
