import FloatingCreateBtn from "@/components/home/FloatingCreateBtn";
import Nomination from "@/components/nominations/Nomination";
import Button from "@/components/shared/Button";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useState } from "react";

const MyNomination = () => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <BaseLayout title="My nomination">
      <div className="relative lg:mx-auto lg:w-[1216px]">
        <div className="bg-primaryGradient px-6 py-7 lg:bg-transparent lg:px-0">
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
        <div className="bg-white lg:mb-20">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="bg-grey-light px-6 py-6 text-left font-primary font-bold"
                >
                  NOMINEE
                </th>
                <th
                  scope="col"
                  className="hidden bg-grey-light px-6 py-6 text-left font-primary font-bold lg:table-cell"
                >
                  DATE SUBMITTED
                </th>
                <th
                  scope="col"
                  className="hidden bg-grey-light px-6 py-6 text-left font-primary font-bold lg:table-cell"
                >
                  CLOSING DATE
                </th>
                <th
                  scope="col"
                  className="hidden bg-grey-light px-6 py-6 text-left font-primary font-bold lg:table-cell"
                >
                  REASON
                </th>
                <th
                  scope="col"
                  className="hidden bg-grey-light px-6 py-6 text-left font-primary font-bold lg:table-cell"
                >
                  PROCESS
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {!isClosed
                ? [1, 3, 4, 5, 6].map((i) => <Nomination key={i} />)
                : [1, 3, 4, 5, 6].map((i) => <Nomination isClosed key={i} />)}
            </tbody>
          </table>
          {/* <div className="bg-grey-light px-6 py-6">
            <p className="font-primary font-bold">NOMINEE</p>
          </div> */}
        </div>

        <FloatingCreateBtn />
      </div>
    </BaseLayout>
  );
};

export default MyNomination;
