import Image from "next/image";
import React from "react";
import LogoSm from "@/assets/svgs/logo-sm.svg";
import LogoLg from "@/assets/svgs/logo-lg.svg";
import Plus from "@/assets/svgs/plus.svg";
import Inbox from "@/assets/svgs/inbox.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed left-0  top-0 z-10 flex w-full items-center justify-between bg-black px-9 py-6 lg:px-8 lg:py-5">
      <div>
        <Link href={"/"}>
          <Image src={LogoSm} alt="logo" className="lg:hidden" />
        </Link>
        <Link href={"/"}>
          <Image src={LogoLg} alt="logo" className="hidden lg:block" />
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
          <Image src={Plus} alt="Add new nomination" />
        </Link>
        <Link href={"/my-nominations"}>
          <Image src={Inbox} alt="Your nomination" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
