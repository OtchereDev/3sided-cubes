import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useEffect } from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-5.png";
import ImgLg from "@/assets/images/lg/img-5.png";
import FormStepper from "@/components/form-process/FormStepper";
import NominationQA from "@/components/form-process/NominationQA";
import { useFormContext } from "@/contexts/FormContext";
import { getFairnessDisplayName } from "@/utils/calculateFairnessSelect";
import Button from "@/components/shared/Button";
import useLinkGeneration from "@/hooks/useLinkGeneration";
import { useNominationContext } from "@/contexts/NominationContext";

const Review = () => {
  const {
    formValues,
    errors,
    trigger,
    onSubmit,
    isCreateLoading,
    isUpdateLoading,
  } = useFormContext();

  const { mode } = useLinkGeneration();
  const { refetch } = useNominationContext();

  useEffect(() => {
    trigger();
  }, []);

  return (
    <BaseLayout title="Home" highBgTop currentStep={4}>
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={4} className="hidden lg:block" />
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
          <h2 className="mx-auto w-[70%] text-center font-primary text-3xl font-bold uppercase leading-[48px] lg:w-full">
            nomination overview
          </h2>
          <p className="mt-5 text-center font-secondary text-[#444444] lg:mx-auto lg:mt-5 lg:w-[75%]">
            Thank you for taking the time to nominate a fellow cube. Please
            check your answers before submitting.
          </p>

          <div className="mt-8 lg:mt-5">
            <NominationQA
              question="Cube’s Name"
              answer={formValues.cubeName as string}
              editLink="/nominate"
            />
            <NominationQA
              question="Reasoning"
              answer={formValues.reason}
              editLink="/describe"
            />
            <NominationQA
              question="Thoughts on Current Process"
              answer={getFairnessDisplayName(formValues.process)}
              editLink="/fairness"
            />
          </div>

          <form
            onSubmit={onSubmit(refetch)}
            className=" mt-12 hidden items-center justify-center lg:flex"
          >
            <Button
              bg="bg-black"
              variant="solid"
              borderColor="border-black"
              text={mode == "edit" ? "UPDATE" : "SUBMIT"}
              color="text-white"
              disabled={Object.keys(errors).length > 0}
              className=" px-[92px] font-primary font-bold"
              type="submit"
              isLoading={isCreateLoading || isUpdateLoading}
            />
          </form>
        </div>
      </div>
      <FloatStepperBtns
        nextLink="/submitted"
        prevLink="/fairness"
        currentStep={4}
        confirmText={mode == "edit" ? "UPDATE" : "SUBMIT"}
        disableNext={
          Object.keys(errors).length > 0 || isCreateLoading || isUpdateLoading
        }
        isLast
        onSubmit={onSubmit(refetch)}
      />
    </BaseLayout>
  );
};

export default Review;
