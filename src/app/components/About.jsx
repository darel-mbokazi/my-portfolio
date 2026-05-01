'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <span className="font-semibold">Web Developer - HeyBassh</span>
          <p className="text-sm text-gray-300">Nov 2024 – Feb 2025</p>
          <p className="text-sm text-gray-400">
            React.js, HTML/CSS, HubSpot CRM Integration
          </p>
        </li>
        <li>
          <span className="font-semibold">
            Freelance Web Designer & Developer - Growit MC
          </span>
          <p className="text-sm text-gray-300">Feb 2024 – Jun 2024</p>
          <p className="text-sm text-gray-400">
            Responsive Websites, UI/UX, Wix & WordPress
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
  const [tab, setTab] = useState('experience')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white max-sm:pt-20 max-lg:pt-20" id="about">
      <h2 className="text-4xl font-bold text-gold mb-4 text-center">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div className="relative w-full aspect-video sm:aspect-4/3 md:aspect-3/4 lg:aspect-4/3 xl:aspect-video rounded-xl overflow-hidden">
          <Image
            src="/images/about-me-image.png"
            alt="about me image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base max-sm:text-justify lg:text-lg">
            Full-Stack JavaScript Developer with hands-on experience building
            modern web applications using React, Next.js, Node.js, and
            PostgreSQL. Experienced in developing scalable front-end interfaces,
            REST APIs, and integrating third-party services such as Stripe.
            Passionate about cloud infrastructure, DevOps practices, and
            building performant full-stack applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}>
              {' '}
              Experience{' '}
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
}

export default AboutSection