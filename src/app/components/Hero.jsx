"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiAmazondynamodb,
  SiDocker,
  SiGit,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: SiReact, color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  { icon: SiDocker, color: "#2496ED", label: "Docker" },
  { icon: SiGit, color: "#F05032", label: "Git" },
  { icon: SiAmazondynamodb, color: "#FF9900", label: "AWS" },
];

const iconVariants = (index) => ({
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.2 + index * 0.12,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
});

const HeroSection = () => {
  return (
<section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-0 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-7 xl:col-span-8 text-center lg:text-left"
    >
      <h1 className="text-white mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-extrabold">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ece1bed2] to-[#CBB26A]">
          Hello, I&apos;m{" "}
        </span>
        <br />

        <TypeAnimation
          sequence={["Siyabonga Mbokazi", 1000, "Full-Stack JS Dev", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        />
      </h1>

      <p className="text-[#ADB7BE] text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
        Full-Stack JavaScript Developer | React, Node.js & Cloud
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <Link
          href="/#contact"
          className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#CBB26A] hover:bg-slate-200 hover:text-slate-800 text-white text-center"
        >
          Hire Me
        </Link>

        <Link
          href="/Darel_Mbokazi_Web_Developer_CV.pdf"
          className="px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-[#DFCD90] to-[#CBB26A] text-white"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
            Download CV
          </span>
        </Link>
      </div>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-5 xl:col-span-4 flex justify-center"
    >
      <div className="relative rounded-full bg-[#181818] w-[230px] h-[230px] xs:w-[260px] xs:h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[390px] xl:h-[390px] flex items-center justify-center">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          className="rounded-full border-[0.5px] border-[#CBB26A] bg-[#CBB26A] w-[150px] h-[150px] xs:w-[175px] xs:h-[175px] sm:w-[220px] sm:h-[220px] lg:w-[265px] lg:h-[265px] xl:w-[290px] xl:h-[290px] object-cover"
          width={270}
          height={270}
          priority
        />

        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const total = skills.length;
          const angle = (index / total) * 2 * Math.PI - Math.PI / 2;

          const radius = 44;
          const x = 46 + radius * Math.cos(angle);
          const y = 46 + radius * Math.sin(angle);

          return (
            <motion.div
              key={skill.label}
              variants={iconVariants(index, total)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              className="absolute w-7 h-7 flex items-center justify-center shadow-md"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={skill.label}
            >
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: skill.color }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default HeroSection;