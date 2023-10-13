import Button from "@/components/shared/Button";
import FloatStepperBtns from "@/components/home/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-2.png";
import ImgLg from "@/assets/images/lg/img-2.png";
import FormStepperBtn from "@/components/home/FormStepperBtn";
import { useRouter } from "next/router";
import FormStepper from "@/components/home/FormStepper";
import SharedModal from "@/components/shared/SharedModal";

const Nominate = () => {
  const contentRef = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else if (!isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = 0 + "px";
    }
  }, [isOpen]);

  return (
    <BaseLayout title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={1} />
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
          <h2 className="text-left font-primary text-2xl font-bold">
            I’d like to nominate...
          </h2>
          <p className="mt-5 text-left font-secondary text-[#444444] lg:mt-5 lg:w-[75%]">
            Please select a cube who you feel has done something honourable this
            month or just all round has a great work ethic.
          </p>

          <div className="mt-8 lg:mt-5">
            <p className="font-bold">
              <span className=" text-primary-pink">*</span> Cube’s name
            </p>

            <div className="mt-3 lg:w-[60%]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-between border border-grey-mid px-3 py-3"
              >
                <p className="font-secondary">Select Option</p>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L7 7L12 2"
                    stroke="#F70087"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div
                ref={contentRef}
                className={` accordion-item-content max-h-0 overflow-hidden bg-grey-light`}
              >
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-b-2 border-white px-3 py-3 font-secondary"
                >
                  <p>Select Option</p>
                </div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-b-2 border-white px-3 py-3 font-secondary"
                >
                  <p>Select Option</p>
                </div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-b-2 border-white px-3 py-3 font-secondary"
                >
                  <p>Select Option</p>
                </div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-b-2 border-white px-3 py-3 font-secondary"
                >
                  <p>Select Option</p>
                </div>
              </div>
            </div>
          </div>
          <FormStepperBtn prevLink="/" nextLink="/describe" />
        </div>
      </div>
      <FloatStepperBtns prevLink="/" nextLink="/describe" currentStep={1} />
    </BaseLayout>
  );
};

export default Nominate;
