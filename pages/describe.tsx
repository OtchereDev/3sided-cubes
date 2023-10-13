import FloatStepperBtns from "@/components/home/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-3.png";
import ImgLg from "@/assets/images/lg/img-3.png";
import FormStepperBtn from "@/components/home/FormStepperBtn";
import FormStepper from "@/components/home/FormStepper";

const Describe = () => {
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
          <h2 className="w-[80%] text-left font-primary text-2xl font-bold lg:w-full">
            I’d like to nominate{" "}
            <span className="text-primary-pink">DAVID</span> because...
          </h2>
          <p className="mt-5 text-left font-secondary text-[#444444] lg:mt-5 lg:w-[75%]">
            Please let us know why you think this cube deserves the ‘cube of the
            month’ title 🏆⭐
          </p>

          <div className="mt-8 lg:mt-5">
            <p className="font-bold">
              <span className=" text-primary-pink">*</span> Reasoning
            </p>

            <textarea className="mt-2 h-[159px] w-full border border-black px-4 py-2 font-secondary outline-none"></textarea>
          </div>
          <FormStepperBtn prevLink="/nominate" nextLink="/fairness" />
        </div>
      </div>
      <FloatStepperBtns
        prevLink="/nominate"
        nextLink="/fairness"
        currentStep={1}
      />
    </BaseLayout>
  );
};

export default Describe;
