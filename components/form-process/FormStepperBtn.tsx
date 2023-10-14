import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const query = router.query;
  const returnTo = query?.returnTo;

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
          href={(returnTo as string) ?? prevLink ?? "#"}
        >
          <Button
            bg="bg-black"
            variant="outline"
            borderColor="border-black"
            text="BACK"
            color="text-black"
            disabled={(returnTo?.length as number) > 0 && disableNext}
            className=" px-[32px] font-primary font-bold"
          />
        </Link>
      )}

      <Link
        className={disableNext ? "diabled-link" : ""}
        href={nextLink ?? "#"}
      >
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
