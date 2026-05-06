// client/src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    id: 1,
    title: "FinVault Banking System",
    description: "A scalable banking management system engineered with a robust microservices architecture. Designed to handle secure financial transactions, user account management, and high-availability operations.",
    techStack: ["Java", "Spring Boot", "Microservices", "MySQL", "REST API"],
    githubLink: "https://github.com/Mohammad-Kaif45/FinVault-Banking-System", // Replace with your exact repo link
  },
  {
    id: 2,
    title: "HarvestHub E-Commerce",
    description: "A full-stack agricultural platform facilitating direct trade between farmers and retailers. Features secure authentication, dynamic user interfaces, and seamless API integrations.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Mohammad-Kaif45/HarvestHub", // Replace with your exact repo link
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my best technical work, showcasing full-stack development and enterprise-grade architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white border border-slate-200 text-blue-700 rounded-md text-xs font-bold shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-md"
                >
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