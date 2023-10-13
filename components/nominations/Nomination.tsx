import React, { useState } from "react";
import Modal from "../shared/Modal";

interface INomination {
  isClosed?: boolean;
}

const Nomination: React.FC<INomination> = ({ isClosed }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <tr
        className={`border-b border-[#EAECF0] ${isClosed && "text-grey-dark"}`}
      >
        <td className=" px-6 py-6 font-secondary">
          <div>
            <p className=" font-bold lg:font-normal">David Jones</p>

            <p className="font-secondary text-grey-dark lg:hidden">
              Always goes above and...
            </p>
          </div>
        </td>
        <td className=" hideable-table-column">21/10/23</td>
        <td className=" hideable-table-column"> 29/10/23</td>
        <td className=" hideable-table-column">
          Lorem ipsum dolor sit amet, consecet desu...
        </td>
        <td className=" hideable-table-column">Fair</td>
        <td>
          <div className="flex items-center justify-between  px-6 py-6">
            <div className="flex gap-4">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={() => !isClosed && setIsDeleteModalOpen(true)}
              >
                <path
                  d="M12.3333 4.49996V3.83329C12.3333 2.89987 12.3333 2.43316 12.1517 2.07664C11.9919 1.76304 11.7369 1.50807 11.4233 1.34828C11.0668 1.16663 10.6001 1.16663 9.66667 1.16663H8.33333C7.39991 1.16663 6.9332 1.16663 6.57668 1.34828C6.26308 1.50807 6.00811 1.76304 5.84832 2.07664C5.66667 2.43316 5.66667 2.89987 5.66667 3.83329V4.49996M7.33333 9.08329V13.25M10.6667 9.08329V13.25M1.5 4.49996H16.5M14.8333 4.49996V13.8333C14.8333 15.2334 14.8333 15.9335 14.5608 16.4683C14.3212 16.9387 13.9387 17.3211 13.4683 17.5608C12.9335 17.8333 12.2335 17.8333 10.8333 17.8333H7.16667C5.76654 17.8333 5.06647 17.8333 4.53169 17.5608C4.06129 17.3211 3.67883 16.9387 3.43915 16.4683C3.16667 15.9335 3.16667 15.2334 3.16667 13.8333V4.49996"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M1.39735 14.5964C1.43564 14.2518 1.45478 14.0795 1.50691 13.9185C1.55316 13.7756 1.61851 13.6397 1.70118 13.5143C1.79436 13.373 1.91694 13.2504 2.16209 13.0053L13.1673 2.00005C14.0878 1.07957 15.5802 1.07957 16.5007 2.00005C17.4211 2.92052 17.4211 4.41291 16.5007 5.33338L5.49542 16.3386C5.25027 16.5838 5.1277 16.7063 4.98639 16.7995C4.86102 16.8822 4.72506 16.9475 4.58219 16.9938C4.42115 17.0459 4.24887 17.0651 3.90429 17.1033L1.08398 17.4167L1.39735 14.5964Z"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </td>
      </tr>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
        }}
        confirmMessage="If you delete this nomination, the nominee will no longer be put
      forward by you."
        title="Delete this nomination?"
        btnText="yes, delete"
      />
    </>
  );
};

export default Nomination;
