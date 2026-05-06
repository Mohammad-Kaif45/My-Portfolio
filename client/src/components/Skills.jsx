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
    <section id="skills" className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        {/* Background decorative technical grid lines */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" stroke="#cbd5e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tighter text-blue-600">My Engineering Toolkit</h2>
            <p className="text-lg text-slate-600">A collection of technologies and tools I've mastered to build technical solutions.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center transition-all duration-200 hover:border-blue-500 hover:shadow-md hover:-translate-y-2 group"
              >
                {/* Tech Logo Placeholder */}
                <div className="text-4xl mb-4 font-black text-slate-300 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                  {skill.logo.toUpperCase().slice(0, 2)}
                </div>
                <p className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;