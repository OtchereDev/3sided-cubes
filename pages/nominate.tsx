import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-2.png";
import ImgLg from "@/assets/images/lg/img-2.png";
import FormStepperBtn from "@/components/form-process/FormStepperBtn";
import FormStepper from "@/components/form-process/FormStepper";
import Select from "@/components/shared/Select";
import { useRouter } from "next/router";
import Modal from "@/components/shared/Modal";
import { useFormContext } from "@/contexts/FormContext";
import { getSelectDisplay } from "@/utils/getSelectDisplay";
import { useCubeAcademyRetrieveNomineeList } from "@/api/apiComponents";
import { AUTHKEY } from "@/constants/jwt";

const Nominate = () => {
  // const [unsavedChanges, setUnsavedChanges] = useState(true);
  // const router = useRouter();
  const isAbortModalOpen = useRef(false);
  // const [allowRouting, setAllowingRouting] = useState(false);
  const { data } = useCubeAcademyRetrieveNomineeList({
    headers: {
      authorization: `Bearer ${AUTHKEY}`,
    },
  });

  // useEffect(() => {
  //   const warningText =
  //     "You have unsaved changes - are you sure you wish to leave this page?";
  //   const handleWindowClose = (e: BeforeUnloadEvent) => {
  //     if (!unsavedChanges) return;
  //     e.preventDefault();
  //     isAbortModalOpen.current = true;
  //     // return;
  //     return (e.returnValue = warningText);
  //   };
  //   const handleBrowseAway = () => {
  //     if (!unsavedChanges) return;
  //     isAbortModalOpen.current = true;
  //     if (window.confirm(warningText)) return;
  //     console.log(router.events);
  //     router.events?.emit("routeChangeError", "Routing Aborted", "/nominate", {
  //       shallow: false,
  //     });
  //     throw "routeChange aborted.";
  //   };
  //   window.addEventListener("beforeunload", handleWindowClose);
  //   router.events.on("routeChangeStart", handleBrowseAway);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleWindowClose);
  //     router.events.off("routeChangeStart", handleBrowseAway);
  //   };
  // }, [unsavedChanges, allowRouting, isAbortModalOpen.current]);

  const { formValues, setValue, trigger, errors } = useFormContext();
  const options = data?.data?.map((nominee) => ({
    value: nominee.nominee_id as string,
    text: nominee.first_name + " " + nominee.last_name,
  }));

  return (
    <BaseLayout currentStep={1} removeMainOverhidden title="Home">
      <div className="lg:mx-auto lg:mb-20 lg:mt-10 lg:w-[880px]  lg:bg-white lg:px-10 lg:py-5  lg:shadow-light">
        <FormStepper step={1} className="hidden lg:block" />
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
          <h2 className="text-left font-primary text-2xl font-bold uppercase">
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

            <Select
              options={options ?? []}
              containerClassName="mt-3 lg:w-[60%]"
              onBlur={() => {
                trigger("nominee_id");
              }}
              error={errors.nominee_id?.message}
              onChange={(val) => {
                setValue("nominee_id", val);
                setValue("cubeName", getSelectDisplay(options ?? [], val));
              }}
              initialValue={formValues.nominee_id}
            />
          </div>
          <FormStepperBtn
            disableNext={
              !formValues.nominee_id.length ||
              (errors.nominee_id?.message?.length as number) > 0
            }
            prevLink="/"
            nextLink="/describe"
          />
        </div>
      </div>
      <FloatStepperBtns
        disableNext={
          !formValues.nominee_id.length ||
          (errors.nominee_id?.message?.length as number) > 0
        }
        prevLink="/"
        nextLink="/describe"
        currentStep={1}
      />

      <Modal
        isOpen={isAbortModalOpen.current}
        onClose={() => {
          // setIsAbortModalOpen(false);
        }}
        confirmMessage="If you leave this page, you will lose any progress made."
        title="Yes, leave page"
        btnText="yes, delete"
      />
    </BaseLayout>
  );
};

export default Nominate;
