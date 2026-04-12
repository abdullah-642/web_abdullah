"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row-reverse items-center justify-center px-5 md:px-20 mt-28 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start" dir="rtl">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            مبرمج تطبيقات · مواقع · أتمتة ذكية
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-[28px] sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-[1.4] md:leading-[1.4]"
        >
          <span>
            حياك الله، هنا نحول فكرتك إلى مشروع{" "}
            <span className="text-[#c4a1ff]">
              رقمي ذكي
            </span>{" "}
            متكامل.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-[#b0aac0] my-5 max-w-[600px] leading-relaxed"
        >
          من الفكرة للإطلاق — تطبيقات جوال، أنظمة ويب، شات بوتات ذكية، وحملات تسويقية تجيب نتائج.
        </motion.p>

        <motion.a
          href="https://wa.me/966541428814"
          target="_blank"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          ابدأ مشروعك
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="أيقونات فضاء"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
