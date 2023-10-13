import React from "react";

interface IFormStepper {
  step: number;
}

const FormStepper: React.FC<IFormStepper> = ({ step }) => {
  const width = step * 25 - 3;
  return (
    <div className="bg-black px-5 py-4 lg:bg-white lg:px-0">
      <div className="h-2 bg-[#F3F3F3] ">
        <div
          style={{ width: width + "%" }}
          className={`h-2 bg-primary-pink`}
        ></div>
      </div>
    </div>
  );
};

export default FormStepper;
