import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const NominationEmptyState = () => {
  return (
    <div className="mt-12 pb-12">
      <div className="flex h-[567px] flex-col items-center justify-center bg-white lg:h-[611px]">
        <svg
          width="88"
          height="62"
          viewBox="0 0 88 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.414 25.3351L77.7447 5.80128C76.0843 2.38285 72.6659 0.234131 68.7592 0.234131H19.1432C15.2364 0.234131 11.9156 2.28519 10.1576 5.80128L0.488346 25.2375C0.195338 25.8235 0 26.5072 0 27.0932V53.3662C0 57.9567 3.71143 61.7658 8.39956 61.7658H79.6004C84.1909 61.7658 88 58.0543 88 53.3662V27.1908C87.9023 26.5072 87.707 25.8235 87.414 25.3351ZM60.9456 22.9911C58.9922 22.9911 57.3319 24.3584 56.8435 26.3118C56.7458 26.7025 54.4994 37.1531 43.8535 37.1531C33.5006 37.1531 31.1565 27.4839 30.8635 26.3118C30.4728 24.3584 28.8124 22.9911 26.7614 22.9911H10.939L17.6781 9.51271C17.9711 9.02436 18.5572 8.53602 19.1432 8.53602H68.7592C69.3452 8.53602 69.9312 8.82903 70.2242 9.51271L76.8657 22.9911H60.9456Z"
            fill="#C3C3C3"
          />
        </svg>

        <h3 className=" mx-auto mt-7 w-[80%] text-center text-2xl font-bold uppercase leading-[38px] text-grey-dark lg:w-[32%] lg:text-center">
          once you submit a nomination, you will be able to view and edit it
          here.
        </h3>
        <Link href={"/nominate"}>
          <Button
            color={"text-white"}
            text="CREATE NEW NOMINATION"
            variant="solid"
            bg="bg-black"
            borderColor="border-black"
            className="mt-7 hidden px-10 lg:block"
          />
        </Link>
      </div>
    </div>
  );
};

export default NominationEmptyState;
