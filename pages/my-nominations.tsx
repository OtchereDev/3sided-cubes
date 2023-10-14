import FloatingCreateBtn from "@/components/form-process/FloatingCreateBtn";
import Nomination from "@/components/nominations/Nomination";
import NominationEmptyState from "@/components/nominations/NominationEmptyState";
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
        {nominations?.length ? (
          <>
            <div className="bg-primaryGradient px-6 py-7 lg:bg-none lg:px-0">
              <h3 className="mb-3 text-2xl font-bold leading-[38px] lg:text-[32px]">
                YOUR NOMINATIONS
              </h3>

              <div className="flex gap-4">
                <Button
                  bg={!isClosed ? "bg-grey-light" : "bg-[#a0ff1e]"}
                  variant="solid"
                  borderColor={
                    !isClosed ? "border-grey-light" : "border-[#a0ff1e]"
                  }
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
                  borderColor={
                    isClosed ? "border-grey-light" : "border-[#a0ff1e]"
                  }
                  text="Closed"
                  color={isClosed ? "text-black" : "text-grey-dark"}
                  className={`px-[32px] py-3 font-secondary ${
                    isClosed ? "font-bold shadow-strong" : ""
                  }`}
                  onClick={() => setIsClosed(true)}
                />
              </div>
            </div>
            <div className="mb-20 bg-white lg:mb-20 lg:h-[611px] lg:overflow-scroll">
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
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
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
          </>
        ) : (
          <NominationEmptyState />
        )}

        <FloatingCreateBtn fill />
      </div>
    </BaseLayout>
  );
};

export default MyNomination;
