"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">Kanyekanye High School</span>
          <p className="text-sm text-gray-300">Matric Certificate</p>
        </li>
        <li>
          <span className="font-semibold">University of KwaZulu Natal</span>
          <p className="text-sm text-gray-300">
            BSc Chemistry & Chemical Technology (Incomplete)
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <a
            href="https://www.udemy.com/certificate/UC-f90bf6ae-64c6-4cf9-bfb6-acea5514f9af/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-semibold">
            Complete C# Masterclass
          </a>
          <p className="text-sm text-gray-300">Udemy – Jul 2024</p>
        </li>

        <li>
          <a
            href="https://www.coursera.org/professional-certificates/ibm-full-stack-javascript-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-semibold">
            Full-Stack JavaScript Developer
          </a>
          <p className="text-sm text-gray-300">Coursera – Sep 2024</p>
        </li>

        <li>
          <a
            href="https://coursera.org/share/12c5192814596db60daec9fff2b040b6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-semibold">
            AWS Cloud Practitioner
          </a>
          <p className="text-sm text-gray-300">Coursera – Oct 2024</p>
        </li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white max-sm:pt-20 max-lg:pt-20" id="about">
      <h2 className="text-4xl font-bold text-gold mb-4 text-center">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me-image.webp"
          alt="about me image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base max-sm:text-justify lg:text-lg">
            Full-Stack Web Developer with professional experience in JavaScript,
            React.js, and Node.js, and practical project experience in C# and
            ASP.NET Core. Skilled in building responsive web applications,
            designing efficient APIs, and integrating databases. Strong
            problem-solving skills with a foundation in agile methodologies and
            cloud technologies (AWS).
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutSection;
