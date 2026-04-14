import { useState, useEffect } from 'react';

const Projects = () => {
  // 1. Set up state to hold our database projects
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the data when the component loads
  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Save the database info into React state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  // 3. Show a loading message while waiting for the database
  if (loading) {
    return (
      <div className="py-20 text-center text-xl font-semibold text-gray-600">
        Loading projects from database...
      </div>
    );
  }

  // 4. Render the actual projects
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {techItem}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;