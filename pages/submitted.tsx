import FloatStepperBtns from "@/components/home/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-6.png";
import ImgLg from "@/assets/images/lg/img-6.png";

import Button from "@/components/shared/Button";
import FloatingCreateBtn from "@/components/home/FloatingCreateBtn";
import Link from "next/link";

const Submitted = () => {
  return (
    <BaseLayout title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[800px]  lg:bg-white  lg:shadow-light">
        <Image
          src={ImgSm}
          alt="lady and guy collaborating"
          className="h-[212px] w-full lg:hidden"
        />
        <Image
          src={ImgLg}
          alt="lady and guy collaborating"
          className="hidden h-[305px] w-full lg:block"
        />
        <div className="mb-32 px-4 pb-20 pt-8 lg:mb-0 lg:px-0 lg:py-8">
          <h2 className="mx-auto w-[70%] text-center font-primary text-3xl font-bold uppercase leading-[48px] lg:w-full">
            nomination submitted
          </h2>
          <p className="mt-5 text-center font-secondary text-[#444444] lg:mx-auto lg:mt-5 lg:w-[75%]">
            Thank you for taking the time to fill out this form! Why not
            nominate another cube?
          </p>

          <div className="mt-8 hidden items-center justify-center gap-4 lg:flex">
            <Link href={"/my-nominations"}>
              <Button
                bg={"bg-white"}
                variant="outline"
                borderColor="border-black"
                text="VIEW NOMINATION"
                color="text-black"
                className=" px-[32px] font-primary font-bold"
              />
            </Link>
            <Link href={"/nominate"}>
              <Button
                bg={"bg-white"}
                variant="outline"
                borderColor="border-black"
                text="CREATE NEW NOMINATION"
                color="text-black"
                className=" px-[32px] font-primary font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
      <FloatingCreateBtn />
    </BaseLayout>
  );
};

export default Submitted;
