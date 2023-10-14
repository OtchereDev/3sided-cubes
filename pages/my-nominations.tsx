import FloatingCreateBtn from "@/components/form-process/FloatingCreateBtn";
import Nomination from "@/components/nominations/Nomination";
import Button from "@/components/shared/Button";
import { useNominationContext } from "@/contexts/NominationContext";
import BaseLayout from "@/layouts/BaseLayout";
import { isClosedNomination } from "@/utils/isClosed";
import React, { useState } from "react";

const MyNomination = () => {
  const [isClosed, setIsClosed] = useState(false);
  const { nominations } = useNominationContext();
  const closedNomination =
    nominations?.filter((nomination) =>
      isClosedNomination(nomination.closing_date as string),
    ) ?? [];
  const openNomination =
    nominations?.filter(
      (nomination) => !isClosedNomination(nomination.closing_date as string),
    ) ?? [];
  return (
    <BaseLayout addBg title="My nomination">
      <div className="relative lg:mx-auto lg:w-[1216px]">
        <div className="bg-primaryGradient px-6 py-7 lg:bg-none lg:px-0">
          <h3 className="mb-3 text-2xl font-bold leading-[38px] lg:text-[32px]">
            YOUR NOMINATIONS
          </h3>

          <div className="flex gap-4">
            <Button
              bg={!isClosed ? "bg-grey-light" : "bg-[#a0ff1e]"}
              variant="solid"
              borderColor={!isClosed ? "border-grey-light" : "border-[#a0ff1e]"}
              text="Current"
              color={!isClosed ? "text-black" : "text-grey-dark"}
              className={`px-[32px] py-3 font-secondary ${
                !isClosed ? "font-bold shadow-strong" : ""
              }`}
              onClick={() => setIsClosed(false)}
            />

            <Button
              bg={isClosed ? "bg-grey-light" : "bg-[#a0ff1e]"}
              variant="solid"
              borderColor={isClosed ? "border-grey-light" : "border-[#a0ff1e]"}
              text="Closed"
              color={isClosed ? "text-black" : "text-grey-dark"}
              className={`px-[32px] py-3 font-secondary ${
                isClosed ? "font-bold shadow-strong" : ""
              }`}
              onClick={() => setIsClosed(true)}
            />
          </div>
        </div>
        <div className="bg-white mb-20 lg:mb-20 lg:h-[611px] lg:overflow-scroll">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="bg-grey-light px-6 py-6 text-left font-primary font-bold"
                >
                  NOMINEE
                </th>
                <th scope="col" className="hidable-table-cell">
                  DATE SUBMITTED
                </th>
                <th scope="col" className="hidable-table-cell ">
                  CLOSING DATE
                </th>
                <th scope="col" className="hidable-table-cell ">
                  REASON
                </th>
                <th scope="col" className="hidable-table-cell ">
                  PROCESS
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {!isClosed
                ? openNomination.map((nomination) => (
                    <Nomination
                      key={nomination.nomination_id}
                      nomination={nomination}
                    />
                  ))
                : closedNomination.map((nomination) => (
                    <Nomination
                      isClosed
                      key={nomination.nomination_id}
                      nomination={nomination}
                    />
                  ))}
            </tbody>
          </table>
        </div>

        {/* <div className="mt-12 pb-12">
          <div className="h-[567px] bg-white flex justify-center items-center flex-col">
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

            <h3 className=" mt-7 uppercase text-grey-dark text-2xl font-bold text-center w-[80%] mx-auto leading-[38px]">
              once you submit a nomination, you will be able to view and edit it
              here.
            </h3>
          </div>
        </div> */}

        <FloatingCreateBtn fill />
      </div>
    </BaseLayout>
  );
};

export default MyNomination;
