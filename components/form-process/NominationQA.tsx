import useLinkGeneration from "@/hooks/useLinkGeneration";
import Link from "next/link";
import React from "react";
import { Pen } from "../shared/icons";

interface INominationQA {
  question: string;
  answer: string;
  editLink: string;
}

const NominationQA: React.FC<INominationQA> = ({
  question,
  answer,
  editLink,
}) => {
  const { generateEditLink } = useLinkGeneration();

  return (
    <div className="relative mb-3 bg-grey-light px-5 py-5">
      <h4 className="text-base font-bold">{question}</h4>
      <p className="mt-1 font-secondary text-base lg:w-[80%]">{answer}</p>

      <Link href={generateEditLink(editLink)}>
        <Pen className="absolute right-4 top-4 cursor-pointer" />
      </Link>
    </div>
  );
};

export default NominationQA;
