'use client'

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gold text-center mb-14">
          Technical Skills
        </h2>

        <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">Frontend</h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Next.js, React Native</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Backend & APIs
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>Node.js, Express.js</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Databases & ORM
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>PostgreSQL, Supabase</li>
              <li>MongoDB</li>
              <li>Prisma ORM</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Cloud & DevOps
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>AWS Cloud Practitioner</li>
              <li>Docker, CI/CD Pipelines</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Version Control & Tools
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>Git, GitHub</li>
              <li>Agile & Scrum</li>
              <li>WordPress, Wix, HubSpot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
