import React from 'react';

// Temporary data - we will fetch this from MongoDB later
const projectsData = [
  {
    id: 1,
    title: 'FinVault',
    description: 'A comprehensive banking management system utilizing a microservices architecture to handle secure transactions and scalable user account management.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'SQL'],
    github: 'https://github.com/Mohammad-Kaif45/FinVault' // Update this link if needed
  },
  {
    id: 2,
    title: 'HarvestHub',
    description: 'An agricultural e-commerce platform facilitating direct trade. Features robust authentication and a responsive user interface.',
    tech: ['Spring Boot', 'Spring Security', 'Thymeleaf', 'Java'],
    github: 'https://github.com/Mohammad-Kaif45/HarvestHub' // Update this link if needed
  },
  {
    id: 3,
    title: 'MERN Portfolio',
    description: 'A professional, light-themed developer portfolio built to showcase full-stack capabilities, featuring a React frontend and an Express/MongoDB backend.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Mohammad-Kaif45' 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-surface px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primaryText mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-background border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-primaryText mb-3">
                {project.title}
              </h3>
              
              <p className="text-secondaryText mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-200">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline flex items-center gap-1"
                >
                  View Repository <span aria-hidden="true">&rarr;</span>
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