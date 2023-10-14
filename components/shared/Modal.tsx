import React, { useEffect } from "react";
import Button from "./Button";

interface ISharedModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  confirmMessage: string;
  btnText: string;
  isLoading?: boolean;
  onClick?: () => Promise<void> | void;
}

const Modal: React.FC<ISharedModal> = ({
  isOpen,
  onClose,
  title,
  confirmMessage,
  btnText,
  isLoading,
  onClick,
}) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.classList.add("overflow-hidden");
    } else {
      window.document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return isOpen ? (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="false"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
          aria-hidden="true"
          onClick={() => !isLoading && onClose()}
        ></div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="absolute bottom-0 left-0 inline-block transform overflow-hidden bg-white   text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full  sm:align-middle lg:relative lg:max-w-[500px]">
          <div className="px-6 pb-4 pt-5">
            <h2 className="py-2 text-lg font-bold uppercase">{title}</h2>
            <div className="mt-3  sm:mt-5 lg:mb-4">
              <p className="font-secondary">{confirmMessage}</p>
            </div>
          </div>
          <div className="mt-5 w-full px-6 py-6 shadow-strong sm:mt-6">
            <Button
              variant="outline"
              bg={""}
              color="text-black"
              borderColor="border-black"
              text={btnText}
              className="mb-3 w-full border-2 font-bold uppercase"
              disabled={isLoading}
              isLoading={isLoading}
              onClick={onClick}
            />
            <Button
              variant="outline"
              bg={""}
              color="text-black"
              borderColor="border-black"
              text="Cancel"
              className="w-full border-2 font-bold uppercase"
              onClick={onClose}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
