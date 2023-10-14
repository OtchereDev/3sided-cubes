import React, { useState } from "react";
import Modal from "../shared/Modal";
import { Nomination } from "@/api/apiResponses";
import dayjs from "dayjs";
import { getFairnessDisplayName } from "@/utils/calculateFairnessSelect";
import { useNominationContext } from "@/contexts/NominationContext";
import { useRouter } from "next/router";
import { Pen, Trash } from "../shared/icons";

interface INomination {
  isClosed?: boolean;
  nomination: Nomination["data"];
}

const NominationComponent: React.FC<INomination> = ({
  isClosed,
  nomination,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  //TODO: add to challenge: The api has to nominee information
  const { nominees, deleteNomination, isDeleteLoading } =
    useNominationContext();
  const nominee = nominees?.find(
    (nominee) => nominee.nominee_id == nomination?.nominee_id,
  );

  return (
    <>
      <tr
        className={`border-b border-[#EAECF0] ${isClosed && "text-grey-dark"}`}
      >
        <td className=" px-6 py-6 font-secondary">
          <div>
            <p className=" font-bold lg:font-normal">
              {nominee?.first_name} {nominee?.last_name}
            </p>

            <p className="line-clamp-1 max-w-[400px] text-ellipsis font-secondary text-grey-dark lg:hidden">
              {nomination?.reason}
            </p>
          </div>
        </td>
        <td className=" hideable-table-column">
          {dayjs(nomination?.date_submitted).format("DD/MM/YYYY")}
        </td>
        <td className=" hideable-table-column">
          {dayjs(nomination?.closing_date).format("DD/MM/YYYY")}
        </td>
        <td className=" hideable-table-column max-w-[422px]">
          <p className=" line-clamp-1">{nomination?.reason}</p>
        </td>
        <td className=" hideable-table-column">
          {getFairnessDisplayName(nomination?.process as string)}
        </td>
        <td>
          <div className="flex items-center justify-between  px-6 py-6">
            <div className="flex gap-4">
              <Trash onClick={() => !isClosed && setIsDeleteModalOpen(true)} />

              <Pen
                onClick={() =>
                  router.push(
                    `/nominate?mode=edit&id=${nomination?.nomination_id}`,
                  )
                }
              />
            </div>
          </div>
        </td>
      </tr>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
        }}
        confirmMessage="If you delete this nomination, the nominee will no longer be put forward by you."
        title="Delete this nomination?"
        btnText="yes, delete"
        onClick={async () => {
          await deleteNomination(nomination?.nomination_id as string);
        }}
        isLoading={isDeleteLoading}
      />
    </>
  );
};

export default NominationComponent;
