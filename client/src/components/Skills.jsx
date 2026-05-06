// client/src/components/Skills.jsx
const techSkills = [
  { name: 'Java', logo: 'java' }, 
  { name: 'Spring Boot', logo: 'springboot' },
  { name: 'Microservices', logo: 'microservices' },
  { name: 'SQL', logo: 'sql' },
  { name: 'React', logo: 'react' },
  { name: 'MongoDB', logo: 'mongodb' },
  { name: 'Node.js', logo: 'node' },
  { name: 'Express', logo: 'express' },
  { name: 'Tailwind CSS', logo: 'tailwind' },
  { name: 'Git', logo: 'git' },
  { name: 'REST API', logo: 'rest' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        {/* Background decorative technical grid lines (Optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" stroke="#374151" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tighter text-lime-400">My Engineering Toolkit</h2>
            <p className="text-lg text-gray-300">A collection of technologies and tools I've mastered to build technical solutions.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg text-center transition-all duration-200 hover:border-lime-500 hover:-translate-y-2 group"
              >
                {/* Tech Logo Placeholder - Using simple text for now */}
                <div className="text-4xl mb-4 font-black text-gray-600 group-hover:text-lime-500 group-hover:scale-110 transition-all">
                  {/* For full technical looks, you can replace this text with tech logos/icons later */}
                  {skill.logo.toUpperCase().slice(0, 2)}
                </div>
                <p className="text-sm font-semibold text-gray-200 transition-colors group-hover:text-gray-50">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;