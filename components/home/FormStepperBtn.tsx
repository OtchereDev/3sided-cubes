import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

interface IFormStepperBtn {
  disableNext?: boolean;
  isLast?: boolean;
  continueText?: string;
  nextLink?: string;
  prevLink?: string;
}

const FormStepperBtn: React.FC<IFormStepperBtn> = ({
  disableNext,
  isLast,
  continueText,
  nextLink,
  prevLink,
}) => {
  return (
    <div
      className={`mt-12  hidden w-full ${
        isLast ? "justify-center" : " justify-between"
      } items-center lg:flex`}
    >
      {!isLast && (
        <Link href={prevLink ?? "#"}>
          <Button
            bg="bg-black"
            variant="outline"
            borderColor="border-black"
            text="BACK"
            color="text-black"
            className=" px-[32px] font-primary font-bold"
          />
        </Link>
      )}

      <Link href={nextLink ?? "#"}>
        <Button
          bg="bg-black"
          variant="solid"
          borderColor="border-black"
          text={continueText?.length ? continueText : "NEXT"}
          color="text-white"
          disabled={disableNext}
          className=" px-[92px] font-primary font-bold"
        />
      </Link>
    </div>
  );
};

export default FormStepperBtn;
