import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-5.png";
import ImgLg from "@/assets/images/lg/img-5.png";
import FormStepperBtn from "@/components/form-process/FormStepperBtn";
import FormStepper from "@/components/form-process/FormStepper";
import NominationQA from "@/components/form-process/NominationQA";

const Review = () => {
  return (
    <BaseLayout title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={4} />
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
              answer="David"
              editLink="/nominate"
            />
            <NominationQA
              question="Reasoning"
              answer="David always goes above and beyond with all the work that he does. He’s also a lovey person to work with!"
              editLink="/describe"
            />
            <NominationQA
              question="Thoughts on Current Process"
              answer="Very Fair"
              editLink="/fairness"
            />
          </div>
          <FormStepperBtn nextLink="/submitted" isLast continueText="SUBMIT" />
        </div>
      </div>
      <FloatStepperBtns
        nextLink="/submitted"
        prevLink="/fairness"
        currentStep={4}
        confirmText="SUBMIT"
      />
    </BaseLayout>
  );
};

export default Review;
