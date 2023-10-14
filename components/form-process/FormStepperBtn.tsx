import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import useLinkGeneration from "@/hooks/useLinkGeneration";
import { useFormContext } from "@/contexts/FormContext";

interface IFormStepperBtn {
  disableNext?: boolean;
  isLast?: boolean;
  continueText?: string;
  nextLink?: string;
  prevLink?: string;
  dispatchState?: boolean;
}

const FormStepperBtn: React.FC<IFormStepperBtn> = ({
  disableNext,
  isLast,
  continueText,
  nextLink,
  prevLink,
  dispatchState,
}) => {
  const { returnTo, generateLink } = useLinkGeneration();
  const { setDataToLocalStorage } = useFormContext();

  return (
    <div
      className={`mt-12  hidden w-full ${
        isLast ? "justify-center" : " justify-between"
      } items-center lg:flex`}
    >
      {!isLast && (
        <Link
          className={
            (returnTo?.length as number) > 0 && disableNext
              ? "diabled-link"
              : ""
          }
          href={generateLink(prevLink as string)}
        >
          <Button
            bg="bg-black"
            variant="outline"
            borderColor="border-black"
            text="BACK"
            color="text-black"
            disabled={(returnTo?.length as number) > 0 && disableNext}
            className=" px-[32px] font-primary font-bold"
            onClick={() =>
              dispatchState &&
              (returnTo?.length as number) > 0 &&
              setDataToLocalStorage()
            }
          />
        </Link>
      )}

      <Link
        className={disableNext ? "diabled-link" : ""}
        href={generateLink(nextLink as string)}
      >
        <Button
          bg="bg-black"
          variant="solid"
          borderColor="border-black"
          text={continueText?.length ? continueText : "NEXT"}
          color="text-white"
          disabled={disableNext}
          className=" px-[92px] font-primary font-bold"
          onClick={() => dispatchState && setDataToLocalStorage()}
        />
      </Link>
    </div>
  );
};

export default FormStepperBtn;
