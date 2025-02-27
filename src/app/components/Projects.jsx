"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "QuickResume (Resume Builder)",
    techUsed: "ASP.NET Core 8 MVC, Entity Framework, SQL Server, QuestPDF",
    image: "/images/projects/quickresume.png",
    tag: ["All", "AspNet"],
    gitUrl: "https://github.com/darel-mbokazi/QuickResume",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Product Listing & Management",
    techUsed: "ASP.NET Core 8 Web API, Entity Framework, SQL Server, React, Typescript",
    image: "/images/projects/product-list.png",
    tag: ["All", "AspNet"],
    gitUrl: "https://github.com/darel-mbokazi/Product-Listing-Management",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Private Property Frontend Clone",
    techUsed: "React, Tailwind CSS, JavaScript",
    image: "/images/projects/private_property.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/darel-mbokazi/Private-Property-Clone-App",
    previewUrl: "https://private-property-clone.firebaseapp.com/",
  },
  {
    id: 4,
    title: "Web Hosting App",
    techUsed: "React, Context API, Express.js, Stripe, Cloudmersive API, Whois API",
    image: "/images/projects/wh-img-1.png",
    tag: ["All", "JavaScript"],
    gitUrl: "",
    previewUrl: "https://web-hosting-react-app.firebaseapp.com/",
  },
  {
    id: 5,
    title: "Izinganekwane (The Folktales)",
    techUsed: "Vite, React, Typescript, Tailwind CSS, Express, MongoDB",
    image: "/images/projects/folktales.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/darel-mbokazi/izinganekwane_folktales",
    previewUrl: "https://izinganekwane-folktales.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-gold mt-16 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 max-sm:grid">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AspNet"
          isSelected={tag === "AspNet"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "Javascript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              techUsed={project.techUsed}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
