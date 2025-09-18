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
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React.js, Vue.js, Tailwind CSS</li>
              <li>State Management: Redux, Pinia</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Backend & APIs
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>C#, ASP.NET Core, Node.js, Express</li>
              <li>REST APIs (ASP.NET Core, Express)</li>
              <li>GraphQL </li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Databases & ORM
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>SQL Server, PostgreSQL, MongoDB</li>
              <li>Entity Framework Core, Prisma</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Cloud & DevOps
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>AWS (Cloud Practitioner)</li>
              <li>Docker, CI/CD Pipelines</li>
            </ul>
          </div>

          <div className="p-6 bg-[#181818] shadow-lg rounded-2xl">
            <h3 className="text-xl text-center font-semibold mb-4">
              Version Control & Tools
            </h3>
            <ul className="text-gold list-disc list-inside space-y-1">
              <li>Git, GitHub</li>
              <li>Agile & Scrum methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
