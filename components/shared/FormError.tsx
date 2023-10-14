import React from "react";

interface IFormError {
  error: string;
}

const FormError: React.FC<IFormError> = ({ error }) => {
  return <p className="text-[#DC3545] text-sm mt-1">{error}</p>;
};

export default FormError;
