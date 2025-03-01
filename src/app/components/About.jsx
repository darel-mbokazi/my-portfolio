"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex max-sm:flex-wrap justify-between gap-5 max-sm:gap-0 list-disc pl-2">
        <div className="max-sm:w-full max-sm:pb-5">
          <h2 className="bg-gold text-center rounded-md py-1 mb-3">Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>Redux</li>
          </ul>
        </div>
        <hr className="border-[0.5px] h-52 max-sm:border-none"/>
        <div className="max-sm:w-full max-sm:pb-5">
          <h2 className="bg-gold text-center rounded-md py-1 mb-3">Backend</h2>
          <ul>
            <li>C#</li>
            <li>ASP.NET Core</li>
            <li>Web APIs</li>
            <li>Entity Framework</li>
            <li>SQL Server</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <hr className="border-[0.5px] h-52 max-sm:border-none" />
        <div className="max-sm:w-full">
          <h2 className="bg-gold text-center rounded-md py-1 mb-3">Other</h2>
          <ul>
            <li>AWS Cloud</li>
            <li>Docker</li>
            <li>DevOps CI/CD</li>
            <li>Git & GitHub</li>
            <li>Supabase</li>
            <li>WordPress</li>
            <li>Wix</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 grid gap-1 ml-3">
        <li>Kanyekanye High School</li>
        <li>University of KwaZulu Natal</li>
        <li>Online Short Courses (Coursera & Udemy)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 grid gap-1 ml-3">
        <li>Complete C# Masterclass (Udemy)</li>
        <li>AWS Cloud Practitioner (Coursera)</li>
        <li>Full-Stack JavaScript Developer (Coursera)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
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
            I am a Full-Stack Web Developer with expertise in C#, ASP.NET Core,
            Entity Framework, and SQL Server for backend development. On the
            frontend, I specialize in HTML, CSS, JavaScript, Vue.js, and
            React.js to build responsive and interactive web applications.
            <br/> 
            With professional experience in JavaScript development, I have worked
            extensively with HTML, CSS, JavaScript, React.js, HubSpot,
            WordPress, and Wix. Additionally, I have hands-on experience in
            database management, cloud deployment (AWS, Docker), and DevOps
            practices (CI/CD) to streamline development and deployment
            workflows.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
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
