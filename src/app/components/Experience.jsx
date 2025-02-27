import React from 'react';

const Experience = () => {
    const experience = [
        {
            company: "Heybassh FCZO",
            position: "Web Developer",
            duties: "Developed and optimized full-stack web applications, handling both front-end and back-end development. Designed and implemented interactive user interfaces, integrated APIs, ensured scalability, and optimized performance. Stayed updated on emerging web technologies and best practices.",
            startingDate: "Nov, 2024",
            endDate: "Present",
            techUsed: "HTML, CSS, Javascript, React.js, HubSpot"
        },
        {
            company: "Growit MC",
            position: "Freelancer Web Designer & Developer",
            duties: "Designed and developed websites by collaborating with clients, creating user-friendly interfaces, and ensuring brand consistency. Built and maintained sites using various CMS platforms, implemented design best practices, and optimized functionality through user flows, wireframes, and responsive layouts.",
            startingDate: "Feb, 2024",
            endDate: "Jun, 2024",
            techUsed: "Wix, WordPress, HTML, CSS, JavaScript"
        }
    ];

    return (
        <section id='experience' className="py-10 relative">
            <h2 className="text-4xl font-bold text-gold mb-16 text-center">Experience</h2>

            <div className="flex flex-col relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-1 border-l-2 border-dotted border-gray-500 transform -translate-x-1/2"></div>

                {experience.map((exp, i) => {
                    const technologies = exp.techUsed.split(",").map((tech) => tech.trim());

                    return (
                        <div
                            key={i}
                            className={`relative bg-[#181818] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 sm:w-[45%]
                            ${i % 2 === 0 ? 'self-start ml-0' : 'self-end mr-0'}`}
                        >
                            <div className="text-gray-400 text-sm mb-2">
                                {exp.startingDate} - {exp.endDate}
                            </div>
                            <h2 className="text-xl font-bold">{exp.company}</h2>
                            <h3 className="text-lg font-semibold text-gold">{exp.position}</h3>
                            <p className="mt-2 text-gray-300">{exp.duties}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gold text-xs font-medium text-[#181818] px-3 py-1 rounded-lg shadow-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
