// client/src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    id: 1,
    title: "FinVault Banking System",
    category: "Microservices & Distributed Systems",
    description: "A scalable banking management system engineered with a robust microservices architecture. Designed to handle secure financial transactions, account management, and high-availability operations.",
    highlights: [
      "Microservices architecture with Service Discovery",
      "Enterprise backend built with Java & Spring Boot",
      "High-concurrency database operations with MySQL"
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "MySQL", "REST API"],
    githubLink: "https://github.com/Mohammad-Kaif45/FinVault-Banking-System",
  },
  {
    id: 2,
    title: "HarvestHub E-Commerce",
    category: "Full-Stack Web Application",
    description: "A full-stack agricultural platform facilitating direct trade between farmers and retailers. Features secure authentication, dynamic user interfaces, and seamless API integrations.",
    highlights: [
      "Direct farmer-to-retailer trade marketplace",
      "Dynamic responsive UI powered by React.js & Tailwind CSS",
      "RESTful API backend using Node.js, Express & MongoDB"
    ],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Mohammad-Kaif45/HarvestHub",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow Circles */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, #000 100%), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 bg-blue-950/40 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-900/40 shadow-sm inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Engineering Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of my best technical work, featuring microservices architecture, full-stack systems, and production-ready applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900/60 border border-slate-800 p-8 md:p-9 rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Category Badge & Top Bar */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-950/60 text-blue-400 border border-blue-900/40 text-xs font-semibold rounded-lg shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Highlights & Architecture
                  </h4>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-slate-950/80 border border-slate-800 text-blue-300 rounded-lg text-xs font-mono font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-blue-500/20"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View Source Repository
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;