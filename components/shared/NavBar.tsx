import Image from "next/image";
import React from "react";

import Link from "next/link";
import { Inbox, LogoLg, LogoSm, Plus } from "./icons";

const NavBar = () => {
  return (
    <nav className="fixed left-0  top-0 z-50 flex w-full items-center justify-between bg-black px-9 py-6 lg:px-8 lg:py-5">
      <div>
        <Link href={"/"}>
          <LogoSm className="lg:hidden" />
        </Link>
        <Link href={"/"}>
          <LogoLg className="hidden lg:block" />
        </Link>
      </div>

      <div className="hidden lg:block">
        <Link href={"/my-nominations"}>
          <p className=" cursor-pointer font-secondary text-base font-bold text-white underline">
            Your Nominations (3)
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-5 lg:hidden">
        <Link href={"/nominate"}>
          <Plus />
        </Link>
        <Link href={"/my-nominations"}>
          <Inbox />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
