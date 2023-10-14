import React from "react";

interface IFormLabel {
  message: string;
}

const FormLabel: React.FC<IFormLabel> = ({ message }) => {
  return (
    <label className="block font-medium text-[#475569] mb-2 text-[14px]">
      {message}
    </label>
  );
};

export default FormLabel;
