import React from 'react';

const Experience = () => {
    const experience = [
      {
        company: 'Heybassh',
        position: 'Web Developer',
        duties: [
          'Developed responsive web apps using HTML, CSS, and JavaScript React.js, optimizing performance by 30% through API integration.',
          'Integrated APIs with front-end components to ensure smooth data exchange between client and server.',
          'Optimized web pages for speed, scalability, and accessibility, improving user experience.',
          'Debugged and troubleshot applications to ensure cross-browser and device compatibility.',
        ],
        startingDate: 'Nov, 2024',
        endDate: 'Feb, 2025',
        techUsed: 'HTML, CSS, Javascript, React.js, HubSpot',
      },
      {
        company: 'Growit MC',
        position: 'Freelancer Web Designer & Developer',
        duties: [
          'Designed and developed responsive websites using Wix and WordPress, ensuring seamless user experiences.',
          'Collaborated with clients to conceptualize creative website designs and branding strategies.',
          'Implemented custom HTML, CSS, and JavaScript solutions to enhance functionality and interactivity.',
          'Optimized websites for SEO and cross-browser compatibility, improving visibility and performance.',
        ],
        startingDate: 'Feb, 2024',
        endDate: 'Jun, 2024',
        techUsed: 'Wix, WordPress, HTML, CSS, JavaScript',
      },
    ]

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
                            ${
                              i % 2 === 0 ? 'self-start ml-0' : 'self-end mr-0'
                            }`}>
                        <div className="text-gray-400 text-sm mb-2">
                          {exp.startingDate} - {exp.endDate}
                        </div>
                        <h2 className="text-xl font-bold">{exp.company}</h2>
                        <h3 className="text-lg font-semibold text-gold">
                          {exp.position}
                        </h3>
                        {exp.duties && exp.duties.length > 0 && (
                          <ul className="mt-2 text-gray-300 list-disc list-inside">
                            {exp.duties.map((duty, index) => (
                              <li className='pb-3' key={index}>{duty}</li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gold text-xs font-medium text-[#181818] px-3 py-1 rounded-lg shadow-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Experience;
