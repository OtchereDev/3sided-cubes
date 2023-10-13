import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

interface IFloatingCreateBtn {
  fill?: boolean;
}

const FloatingCreateBtn: React.FC<IFloatingCreateBtn> = ({ fill }) => {
  return (
    <div className="fixed bottom-0 z-10 left-0 flex w-full items-center justify-center gap-4 bg-white py-5 shadow-strong lg:hidden">
      <Link href={"/nominate"} className="block w-[85%]">
        <Button
          bg="bg-black"
          variant={fill ? "solid" : "outline"}
          borderColor="border-black"
          text="CREATE NEW NOMINATION"
          color={fill ? "text-white" : "text-black"}
          className={` w-full font-primary font-bold`}
        />
      </Link>
    </div>
  );
};

export default FloatingCreateBtn;
