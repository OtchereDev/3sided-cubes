import React from "react";
import Button from "@/components/shared/Button";
import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-4.png";
import ImgLg from "@/assets/images/lg/img-4.png";
import FormStepperBtn from "@/components/form-process/FormStepperBtn";
import FormStepper from "@/components/form-process/FormStepper";
import FairnessMobileOption from "@/components/form-process/FairnessMobileOption";
import FairnessLgOption from "@/components/form-process/FairnessLgOption";
import FairnessRangeSelector from "@/components/form-process/FairnessRangeSelector";
import { useFormContext } from "@/contexts/FormContext";

const options = [
  {
    name: "Very Unfair",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[35px] lg:w-[35px]"
      >
        <path
          d="M12 0C5.39975 0 0 5.39975 0 12C0 18.6002 5.39975 24 12 24C18.6002 24 24 18.6002 24 12C24 5.39975 18.6002 0 12 0ZM5.14262 8.57213C5.14262 7.62877 5.91402 6.85738 6.85738 6.85738C7.80074 6.85738 8.57213 7.62877 8.57213 8.57213C8.57213 9.5155 7.80074 10.2869 6.85738 10.2869C5.91402 10.2853 5.14262 9.51389 5.14262 8.57213ZM17.1426 10.2852C16.1993 10.2852 15.4279 9.51385 15.4279 8.57049C15.4279 7.62713 16.1993 6.85573 17.1426 6.85573C18.086 6.85573 18.8574 7.62713 18.8574 8.57049C18.8574 9.51385 18.086 10.2852 17.1426 10.2852Z"
          fill="black"
        />
        <path
          d="M11.9998 14.6451C14.0569 14.6451 16.1991 15.5016 17.7419 17.0444C18.0858 17.3868 18.0858 17.901 17.7435 18.2449C17.7435 18.2449 17.2414 18.2693 16.543 18.2449C14.057 18.1582 13.6503 18.1578 12 18.1582C10.3506 18.1585 7.45829 18.2449 7.45829 18.2449H6.25779C5.91549 17.901 5.91549 17.3867 6.25779 17.0444C7.80058 15.4165 9.94279 14.6451 11.9998 14.6451Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
    value: "very_unfair",
  },
  {
    name: "Unfair",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[35px] lg:w-[35px]"
      >
        <path
          d="M12 0C5.39975 0 0 5.39975 0 12C0 18.6002 5.39975 24 12 24C18.6002 24 24 18.6002 24 12C24 5.39975 18.6002 0 12 0ZM5.14262 8.57213C5.14262 7.62877 5.91402 6.85738 6.85738 6.85738C7.80074 6.85738 8.57213 7.62877 8.57213 8.57213C8.57213 9.5155 7.80074 10.2869 6.85738 10.2869C5.91402 10.2853 5.14262 9.51389 5.14262 8.57213ZM17.1426 10.2852C16.1993 10.2852 15.4279 9.51385 15.4279 8.57049C15.4279 7.62713 16.1993 6.85573 17.1426 6.85573C18.086 6.85573 18.8574 7.62713 18.8574 8.57049C18.8574 9.51385 18.086 10.2852 17.1426 10.2852Z"
          fill="black"
        />
        <path
          d="M11.9998 14.3992C14.0569 14.3992 16.1991 15.2557 17.7419 16.7985C18.0858 17.1409 18.0858 17.6551 17.7435 17.999C17.3996 18.3413 16.8853 18.3413 16.543 17.999C14.0585 15.5129 9.94444 15.5129 7.45829 17.999C7.11435 18.3413 6.6001 18.3413 6.25779 17.999C5.91549 17.6551 5.91549 17.1408 6.25779 16.7985C7.80058 15.1706 9.94279 14.3992 11.9998 14.3992Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
    value: "unfair",
  },
  {
    name: "Not sure",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[35px] lg:w-[35px]"
      >
        <path
          d="M0 12C0 5.39975 5.39975 0 12 0C18.6002 0 24 5.39975 24 12C24 18.6002 18.6002 24 12 24C5.39975 24 0 18.6002 0 12Z"
          fill="black"
        />
        <path
          d="M8.07099 8.57157C8.07099 9.24216 7.52737 9.78578 6.85679 9.78578C6.1862 9.78578 5.64258 9.24216 5.64258 8.57157C5.64258 7.90098 6.1862 7.35736 6.85679 7.35736C7.52737 7.35736 8.07099 7.90098 8.07099 8.57157Z"
          fill="#F8F8F8"
          stroke="#F8F8F8"
        />
        <path
          d="M18.3561 8.57157C18.3561 9.24216 17.8125 9.78578 17.1419 9.78578C16.4714 9.78578 15.9277 9.24216 15.9277 8.57157C15.9277 7.90098 16.4714 7.35736 17.1419 7.35736C17.8125 7.35736 18.3561 7.90098 18.3561 8.57157Z"
          fill="#F8F8F8"
          stroke="#F8F8F8"
        />
        <line
          x1="6.48633"
          y1="15.7997"
          x2="17.5143"
          y2="15.7997"
          stroke="#F8F8F8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "not_sure",
  },
  {
    name: "Fair",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[35px] lg:w-[35px]"
      >
        <path
          d="M12 0C5.39975 0 0 5.39975 0 12C0 18.6002 5.39975 24 12 24C18.6002 24 24 18.6002 24 12C24 5.39975 18.6002 0 12 0ZM5.14262 8.57213C5.14262 7.62877 5.91402 6.85738 6.85738 6.85738C7.80074 6.85738 8.57213 7.62877 8.57213 8.57213C8.57213 9.5155 7.80074 10.2869 6.85738 10.2869C5.91402 10.2853 5.14262 9.51389 5.14262 8.57213ZM17.742 17.2278C16.1993 18.7706 14.057 19.6271 12 19.6271C9.94295 19.6271 7.80074 18.8557 6.25795 17.2278C5.91565 16.8855 5.91565 16.3712 6.25795 16.0273C6.60026 15.685 7.11451 15.685 7.45845 16.0273C9.9446 18.5134 14.0587 18.5134 16.5432 16.0273C16.8855 15.685 17.3998 15.685 17.7437 16.0273C18.086 16.3712 18.086 16.8855 17.7421 17.2278H17.742ZM17.1426 10.2852C16.1993 10.2852 15.4279 9.51385 15.4279 8.57049C15.4279 7.62713 16.1993 6.85573 17.1426 6.85573C18.086 6.85573 18.8574 7.62713 18.8574 8.57049C18.8574 9.51385 18.086 10.2852 17.1426 10.2852Z"
          fill="black"
        />
      </svg>
    ),
    value: "fair",
  },
  {
    name: "Very Fair",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[35px] lg:w-[35px]"
      >
        <path
          d="M12 0C5.39975 0 0 5.39975 0 12C0 18.6002 5.39975 24 12 24C18.6002 24 24 18.6002 24 12C24 5.39975 18.6002 0 12 0ZM5.14262 8.57213C5.14262 7.62877 5.91402 6.85738 6.85738 6.85738C7.80074 6.85738 8.57213 7.62877 8.57213 8.57213C8.57213 9.5155 7.80074 10.2869 6.85738 10.2869C5.91402 10.2853 5.14262 9.51389 5.14262 8.57213ZM17.742 17.2278C16.1993 18.7706 14.057 19.6271 12 19.6271C9.94295 19.6271 7.80074 18.8557 6.25795 17.2278C5.91565 16.8855 5.91565 16.3712 6.25795 16.0273H7.45845C7.45845 16.0273 10.3507 16.1137 12.0001 16.1141C13.6505 16.1144 14.0572 16.1141 16.5432 16.0273C17.2415 16.0029 17.7437 16.0273 17.7437 16.0273C18.086 16.3712 18.086 16.8855 17.742 17.2278ZM17.1426 10.2852C16.1993 10.2852 15.4279 9.51385 15.4279 8.57049C15.4279 7.62713 16.1993 6.85573 17.1426 6.85573C18.086 6.85573 18.8574 7.62713 18.8574 8.57049C18.8574 9.51385 18.086 10.2852 17.1426 10.2852Z"
          fill="black"
        />
      </svg>
    ),
    value: "very_fair",
  },
];

const Fairness = () => {
  const { formValues } = useFormContext();
  return (
    <BaseLayout currentStep={3} title="Rate our process">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={3} className="hidden lg:block" />
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
          <h2 className="text-left font-primary text-2xl font-bold uppercase lg:w-[80%]">
            IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?
          </h2>
          <p className="mt-3 text-left font-secondary text-[#444444] lg:mt-3 lg:w-[75%]">
            As you know, out the nominees chosen, we spin a wheel to pick the
            cube of the month. What’s your opinion on this method?
          </p>

          <div className="mt-6 lg:mt-12">
            <div className="lg:hidden">
              {options.map((option) => (
                <FairnessMobileOption
                  key={option.value}
                  name={option.name}
                  svg={option.svg}
                  value={option.value}
                />
              ))}
            </div>

            <div className="hidden lg:mx-20 lg:block">
              <FairnessRangeSelector />
              <div className="mt-8 flex justify-between">
                {options.map((option) => (
                  <FairnessLgOption
                    key={option.value}
                    name={option.name}
                    svg={option.svg}
                    value={option.value}
                  />
                ))}
              </div>
            </div>
          </div>
          <FormStepperBtn
            disableNext={!formValues.process.length}
            prevLink="/describe"
            nextLink="/review"
            dispatchState
          />
        </div>
      </div>
      <FloatStepperBtns
        currentStep={3}
        prevLink="/describe"
        nextLink="/review"
        disableNext={!formValues.process.length}
        dispatchState
      />
    </BaseLayout>
  );
};

export default Fairness;
