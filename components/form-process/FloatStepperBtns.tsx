import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import useLinkGeneration from "@/hooks/useLinkGeneration";
import { useFormContext } from "@/contexts/FormContext";

interface IFloatStepperBtns {
  currentStep: number;
  nextLink?: string;
  prevLink?: string;
  confirmText?: string;
  disableNext?: boolean;
  isLast?: boolean;
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  isLoading?: boolean;
  dispatchState?: boolean;
}

const FloatStepperBtns: React.FC<IFloatStepperBtns> = ({
  currentStep,
  nextLink,
  prevLink,
  confirmText,
  disableNext,
  isLast,
  onSubmit,
  isLoading,
  dispatchState,
}) => {
  const { returnTo, generateLink } = useLinkGeneration();
  const { setDataToLocalStorage, clearDataFromLocalStorage } = useFormContext();

  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center gap-4 bg-white py-5 shadow-strong lg:hidden">
      {currentStep > 0 && (
        <Link
          className={`block w-[30%] ${
            disableNext && returnTo ? "diabled-link" : ""
          }`}
          href={generateLink(prevLink as string)}
        >
          <Button
            bg="bg-black"
            variant="outline"
            borderColor="border-black"
            text="BACK"
            color="text-black"
            disabled={(returnTo?.length as number) > 0 && disableNext}
            className="w-full  font-primary font-bold"
            isLoading={isLoading}
            onClick={() =>
              dispatchState &&
              (returnTo?.length as number) > 0 &&
              setDataToLocalStorage()
            }
          />
        </Link>
      )}

      {isLast ? (
        <form onSubmit={onSubmit} className="w-[55%]">
          <Button
            bg="bg-black"
            variant="solid"
            borderColor="border-black"
            text={confirmText as string}
            disabled={disableNext}
            color="text-white"
            className={`w-full  font-primary font-bold`}
            onClick={clearDataFromLocalStorage}
          />
        </form>
      ) : (
        <Link
          href={generateLink(nextLink as string)}
          className={`${disableNext ? "diabled-link" : ""} ${
            currentStep == 0 ? "w-[85%]" : "w-[55%]"
          }`}
        >
          <Button
            bg="bg-black"
            variant="solid"
            borderColor="border-black"
            text={currentStep > 0 ? "NEXT" : "GET STARTED"}
            disabled={disableNext}
            color="text-white"
            className={` w-full font-primary font-bold`}
            onClick={() =>
              dispatchState &&
              (returnTo?.length as number) > 0 &&
              setDataToLocalStorage()
            }
          />
        </Link>
      )}
    </div>
  );
};

export default FloatStepperBtns;
