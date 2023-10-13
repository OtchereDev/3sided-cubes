import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

interface IFloatStepperBtns {
  currentStep: number;
  nextLink?: string;
  prevLink?: string;
  confirmText?: string;
}

const FloatStepperBtns: React.FC<IFloatStepperBtns> = ({
  currentStep,
  nextLink,
  prevLink,
  confirmText,
}) => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center gap-4 bg-white py-5 shadow-strong lg:hidden">
      {currentStep > 0 && (
        <Link className="block w-[30%]" href={prevLink ?? "#"}>
          <Button
            bg="bg-black"
            variant="outline"
            borderColor="border-black"
            text="BACK"
            color="text-black"
            className="w-full  font-primary font-bold"
          />
        </Link>
      )}
      <Link
        href={nextLink ?? "#"}
        className={` ${currentStep == 0 ? "w-[85%]" : "w-[55%]"}`}
      >
        <Button
          bg="bg-black"
          variant="solid"
          borderColor="border-black"
          text={
            currentStep > 0
              ? confirmText?.length
                ? confirmText
                : "NEXT"
              : "GET STARTED"
          }
          color="text-white"
          className={` w-full font-primary font-bold`}
        />
      </Link>
    </div>
  );
};

export default FloatStepperBtns;
