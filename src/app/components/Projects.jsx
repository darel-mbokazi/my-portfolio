'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'Job Application App',
    techUsed:
      'Node.js, Express.js, PostgreSQL, Prisma, Cloudinary, React, Redux, React Query',
    image: '/images/projects/job-application.png',
    tag: ['All', 'Full-Stack'],
    gitUrl: 'https://github.com/darel-mbokazi/techcareers-frontend',
    previewUrl: 'https://techcareers-frontend.onrender.com',
  },
  {
    id: 2,
    title: 'Web Hosting App',
    techUsed:
      'Node.js, Express.js, MongoDB, React.js, Stripe, Cloudmersive API, Whois API',
    image: '/images/projects/web-hosting.png',
    tag: ['All', 'Full-Stack'],
    gitUrl: 'https://github.com/darel-mbokazi/web-hosting',
    previewUrl: 'https://web-hosting-frontend-react.vercel.app/',
  },
  {
    id: 3,
    title: 'Izinganekwane (The Folktales)',
    techUsed: 'React, Typescript, Tailwind CSS, Node.js, Express, MongoDB',
    image: '/images/projects/folktales.png',
    tag: ['All', 'Full-Stack'],
    gitUrl: 'https://github.com/darel-mbokazi/izinganekwane_folktales',
    previewUrl: 'https://izinganekwane-folktales.vercel.app',
  },
  {
    id: 4,
    title: 'Private Property Frontend Clone',
    techUsed: 'React, Tailwind CSS, JavaScript',
    image: '/images/projects/private_property.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/darel-mbokazi/Private-Property-Clone-App',
    previewUrl: 'https://private-property-clone.firebaseapp.com/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-gold mt-16 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 w-1/2 m-auto">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === 'Full-Stack'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === 'Frontend'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              techUsed={project.techUsed}
              image={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              projectImages={project.projectImages}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
