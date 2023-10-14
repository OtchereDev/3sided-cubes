import React from "react";
import BgMobile from "@/assets/images/sm/auth-bg-sm.png";
import BgLg from "@/assets/images/lg/auth-bg-lg.png";
import Image from "next/image";

interface ILayout {
  children: React.ReactNode;
}

const AuthLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className=" bg-lg relative flex min-h-screen min-w-full justify-center overflow-hidden pt-10 font-primary lg:items-center lg:pt-0">
      <Image
        className="absolute left-0 top-0 hidden h-full w-full lg:block"
        src={BgLg}
        alt="bg"
      />
      <Image
        className="absolute left-0 top-0 mt-24 h-full w-full lg:hidden"
        src={BgMobile}
        alt="bg"
      />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
