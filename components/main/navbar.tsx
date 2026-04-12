'use client';
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div dir="rtl" className="w-full h-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014cc] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Top Row: Logo + Social Icons */}
      <div className="w-full h-[60px] flex items-center justify-between">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center gap-2"
        >
          <Image
            src="/hero.png"
            alt="Logo"
            width={36}
            height={36}
            draggable={false}
            className="cursor-pointer rounded-full"
          />
          <span className="font-bold text-[14px] md:text-base text-gray-300">عبدالله | AI Agent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[#c4a1ff] transition"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[#c4a1ff] transition text-green-400 font-bold"
            >
              تواصل معي
            </Link>
          </div>
        </div>

        {/* Social Icons - always visible */}
        <div className="flex flex-row gap-4 md:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-5 w-5 md:h-6 md:w-6 text-white hover:text-[#c4a1ff] transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - compact row */}
      <div className="flex md:hidden items-center justify-center gap-4 pb-2 text-[13px] text-gray-300">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            className="cursor-pointer hover:text-[#c4a1ff] transition"
          >
            {link.title}
          </Link>
        ))}
        <Link
          href={LINKS.sourceCode}
          target="_blank"
          rel="noreferrer noopener"
          className="cursor-pointer text-green-400 font-bold hover:text-[#c4a1ff] transition"
        >
          تواصل معي
        </Link>
      </div>
    </div>
  );
};