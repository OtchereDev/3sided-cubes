import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const FloatingCreateBtn = ({}) => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center gap-4 bg-white py-5 shadow-strong lg:hidden">
      <Link href={"/nominate"} className="block w-[85%]">
        <Button
          bg="bg-black"
          variant="outline"
          borderColor="border-black"
          text="CREATE NEW NOMINATION"
          color="text-black"
          className={` w-full font-primary font-bold`}
        />
      </Link>
    </div>
  );
};

export default FloatingCreateBtn;
