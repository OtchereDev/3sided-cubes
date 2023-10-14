import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Bg from "@/assets/images/lg/bg-l.png";

interface IBaseLayout {
  children: React.ReactNode;
  title: string;
  addBg?: boolean;
  highBgTop?: boolean;
  removeMainOverhidden?: boolean;
  currentStep?: number | boolean;
}

const BaseLayout: React.FC<IBaseLayout> = ({
  children,
  title,
  addBg,
  highBgTop,
  removeMainOverhidden,
  currentStep,
}) => {
  const pageTitle = `3 sided cube - ${title}`;

  return (
    <div className="h-screen min-h-screen w-full font-primary">
      <NavBar currentStep={currentStep} />
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main
        className={`w-full  ${
          currentStep ? "pt-[7.55rem]" : "pt-[5.3rem]"
        } lg:relative lg:bg-primaryGradient ${addBg && "bg-primaryGradient"} ${
          !removeMainOverhidden ? "overflow-hidden" : ""
        }`}
      >
        <Image
          src={Bg}
          alt="background"
          className={`absolute left-0 ${
            highBgTop ? "top-15" : "top-11"
          }  hidden w-full lg:block`}
        />
        <div className="lg:relative lg:overflow-hidden">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
