import FloatStepperBtns from "@/components/form-process/FloatStepperBtns";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImgSm from "@/assets/images/sm/img-2.png";
import ImgLg from "@/assets/images/lg/img-2.png";
import FormStepperBtn from "@/components/form-process/FormStepperBtn";
import FormStepper from "@/components/form-process/FormStepper";
import Select from "@/components/shared/Select";
import Modal from "@/components/shared/Modal";
import { useFormContext } from "@/contexts/FormContext";
import { getSelectDisplay } from "@/utils/getSelectDisplay";
import { useNavigationObserver } from "@/hooks/useWarnOnExist";
import { useNominationContext } from "@/contexts/NominationContext";

const Nominate = () => {
  const [showModal, setShowModal] = useState(false);
  const { nominees } = useNominationContext();
  const { formValues, setValue, trigger, errors, clearDataFromLocalStorage } =
    useFormContext();

  const [isDirtyState, setIsDirtyState] = useState(
    formValues.nominee_id.length > 0,
  );

  const navigate = useNavigationObserver({
    shouldStopNavigation: isDirtyState,
    onNavigate: () => {
      setShowModal(true);
    },
  });

  const options = nominees?.map((nominee) => ({
    value: nominee.nominee_id as string,
    text: nominee.first_name + " " + nominee.last_name,
  }));

  useEffect(() => {
    if (formValues.nominee_id.length > 0) {
      setIsDirtyState(true);
    }
  }, [formValues]);

  return (
    <BaseLayout
      currentStep={1}
      removeMainOverhidden
      title="Select who you want to nominate"
    >
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
          <p className="mt-3 text-left font-secondary text-[#444444] lg:mt-5 lg:w-[75%]">
            Please select a cube who you feel has done something honourable this
            month or just all round has a great work ethic.
          </p>

          <div className="mt-8 lg:mt-12">
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
            dispatchState
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
        dispatchState
      />

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        confirmMessage="If you leave this page, you will lose any progress made."
        title="Yes, leave page"
        btnText="yes, delete"
        onClick={() => {
          setIsDirtyState(false);
          clearDataFromLocalStorage();
          navigate();
        }}
      />
    </BaseLayout>
  );
};

export default Nominate;
