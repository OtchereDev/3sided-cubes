import BaseLayout from "@/layouts/BaseLayout";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-1.png";
import ImgLg from "@/assets/images/lg/img-1.png";
import Button from "@/components/shared/Button";
import FloatStepperBtns from "@/components/home/FloatStepperBtns";
import Link from "next/link";

export default function Home() {
  return (
    <BaseLayout title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10  lg:w-[800px] lg:bg-white lg:shadow-light">
        <Image
          src={ImgSm}
          alt="man pining task"
          className="h-[212px] w-full lg:hidden"
        />
        <Image
          src={ImgLg}
          alt="man pining task"
          className="hidden h-[305px] w-full lg:block"
        />
        <div className="px-4 pb-20 pt-8 lg:px-24 lg:py-12">
          <h2 className="text-center font-primary text-3xl font-bold">
            CUBE OF THE MONTH NOMINATIONS
          </h2>
          <p className="mt-5 text-center font-secondary lg:mt-5">
            At cube we&#x2019;re passionate about recognising the great work
            that our cubes do. Each month one of our cubes are crowned cube of
            the month 👑⭐. Please nominate who you think deserves this months
            title.
          </p>
          <div className="mt-7  hidden justify-center lg:flex">
            <Link href={"/nominate"}>
              <Button
                bg="bg-black"
                variant="solid"
                borderColor="border-black"
                text="GET STARTED"
                color="text-white"
                className="mx-auto px-[92px] font-primary font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
      <FloatStepperBtns nextLink="/nominate" currentStep={0} />
    </BaseLayout>
  );
}
