import React from "react";

import Link from "next/link";
import { Inbox, LogoLg, LogoSm, Plus } from "./icons";
import { useNominationContext } from "@/contexts/NominationContext";
import FormStepper from "../form-process/FormStepper";
import { useAuthContext } from "@/contexts/AuthContext";

interface INavBar {
  currentStep?: boolean | number;
}

const NavBar: React.FC<INavBar> = ({ currentStep }) => {
  // TODO: add to writing: I assume that the nomination counter is count all nomination whether closed or current
  const { nominationCount } = useNominationContext();
  const { logout } = useAuthContext();
  return (
    <nav className="fixed left-0 top-0 z-50 w-full  bg-black px-5 py-6 lg:px-8 lg:py-5">
      <div className="flex  items-center justify-between">
        <div>
          <Link href={"/"}>
            <LogoSm className="text-white lg:hidden" />
          </Link>
          <Link href={"/"}>
            <LogoLg className="hidden text-white lg:block" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-3">
          <Link href={"/my-nominations"}>
            <p className=" cursor-pointer font-secondary text-base font-bold text-white underline">
              Your Nominations ({nominationCount})
            </p>
          </Link>
          <p
            onClick={logout}
            className="cursor-pointer font-secondary text-base font-bold text-white hover:text-primary-green hover:underline"
          >
            Log out
          </p>
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <Link href={"/nominate"}>
            <Plus />
          </Link>
          <Link href={"/my-nominations"}>
            <Inbox />
          </Link>
        </div>
      </div>
      {currentStep && (
        <FormStepper
          step={currentStep as number}
          className={"mt-7 !px-0 !py-0 lg:!hidden"}
        />
      )}
    </nav>
  );
};

export default NavBar;
