import React from "react";
import Location from "./Location";
import LogoLg from "@/assets/svgs/logo-lg.svg";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from "./icons";
import Image from "next/image";

const socials = [
  {
    name: "twitter",
    svg: <Twitter className="socials" />,
    link: "",
  },
  {
    name: "instagram",
    svg: <Instagram className="socials" />,
    link: "",
  },
  {
    name: "facebook",
    svg: <Facebook className="socials" />,
    link: "",
  },
  {
    name: "linkedin",
    svg: <LinkedIn className="socials" />,
    link: "",
  },
  {
    name: "youtube",
    svg: <Youtube className="socials" />,
    link: "",
  },
];

const Footer = () => {
  return (
    <div className=" relative bg-black px-7 py-7 pb-32 text-white lg:px-32 lg:py-8">
      <div className="border-b-2 pb-5">
        <Image
          src={LogoLg}
          alt="logo"
          className="mx-auto w-8/12 !block lg:mx-0 lg:w-auto "
        />
      </div>

      <div className="lg:mt-8 lg:flex lg:justify-between">
        <div className="mt-6 lg:mt-0 lg:flex lg:gap-3">
          <Location
            name="Bournemouth"
            address="Telephone House"
            location="Bournemouth, BH1 3NE"
          />
          <Location
            name="London"
            address="51 Eastcheap"
            location="London, EC3M 1JP"
          />
          <Location
            name="Washington"
            address="80 M Street SE"
            location="Washington, D.C 20003"
          />
          <Location
            name="Florida"
            address="7901 4th St N, STE 300"
            location="St. Petersburg FL 33702"
          />
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="font-primary text-xs font-bold ">Get social</p>
          <div className="mt-2 flex gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.link}>
                {social.svg}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center font-secondary text-xs lg:flex lg:justify-between">
        <p>© 2023 3 Sided Cube</p>
        <p>Let&apos;s Build Tech For Good</p>
      </div>
    </div>
  );
};

export default Footer;
