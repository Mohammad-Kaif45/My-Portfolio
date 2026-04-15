import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching from your working local backend
    fetch('http://127.0.0.1:5000/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-medium">Loading projects from database...</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Featured Work</h2>
          <div className="w-16 h-1 bg-slate-800 mx-auto rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Title with subtle icon */}
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{project.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack Tags (Monochrome) */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              
              {/* Action Link with animated arrow */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors group/link mt-auto pt-4 border-t border-slate-100"
              >
                View Repository 
                <svg 
                  className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;