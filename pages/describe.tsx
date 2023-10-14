import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-3.png";
import ImgLg from "@/assets/images/lg/img-3.png";
import FormStepperBtn from "@/components/form-process/FormStepperBtn";
import FormStepper from "@/components/form-process/FormStepper";
import { useFormContext } from "@/contexts/FormContext";
import FormError from "@/components/shared/FormError";

const Describe = () => {
  const { formValues, register, errors, setValue } = useFormContext();

  return (
    <BaseLayout title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={2} />
        <Image
          src={ImgSm}
          alt="lady and guy collaborating"
          className="h-[180px] w-full lg:hidden"
        />
        <Image
          src={ImgLg}
          alt="lady and guy collaborating"
          className="hidden h-[187px] w-full lg:block"
        />
        <div className="px-4 pb-20 pt-8 lg:px-0 lg:py-8">
          <h2 className="w-[80%] text-left font-primary uppercase text-2xl font-bold lg:w-full">
            I’d like to nominate{" "}
            <span className="text-primary-pink">
              {formValues.cubeName?.split(" ")[0]}
            </span>{" "}
            because...
          </h2>
          <p className="mt-5 text-left font-secondary text-[#444444] lg:mt-5 lg:w-[75%]">
            Please let us know why you think this cube deserves the ‘cube of the
            month’ title 🏆⭐
          </p>

          <div className="mt-8 lg:mt-5">
            <p className="font-bold">
              <span className=" text-primary-pink">*</span> Reasoning
            </p>

            <textarea
              {...register("reason")}
              onChange={(e) => setValue("reason", e.target.value)}
              className={`mt-2 h-[159px] w-full border px-4 resize-none py-2 font-secondary outline-none ${
                errors.reason?.message ? "form-field-error " : "border-black"
              }`}
            ></textarea>
            <FormError error={errors.reason?.message as string} />
          </div>
          <FormStepperBtn
            disableNext={
              (errors.reason?.message?.length as number) > 0 ||
              formValues.reason.length == 0
            }
            prevLink="/nominate"
            nextLink="/fairness"
          />
        </div>
      </div>
      <FloatStepperBtns
        prevLink="/nominate"
        nextLink="/fairness"
        currentStep={2}
        disableNext={
          (errors.reason?.message?.length as number) > 0 ||
          formValues.reason.length == 0
        }
      />
    </BaseLayout>
  );
};

export default Describe;
