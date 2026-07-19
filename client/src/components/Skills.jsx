// client/src/components/Skills.jsx
import React from 'react';

const skillCategories = [
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "Microservices", "REST APIs"]
  },
  {
    title: "Frontend Development",
    icon: "💻",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"]
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "SQL", "MySQL"]
  },
  {
    title: "Tools & Version Control",
    icon: "🛠️",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative">
        
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tighter text-blue-600 dark:text-blue-500">My Engineering Toolkit</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A categorized overview of the technologies, languages, and tools I use to build scalable full-stack applications.
            </p>
          </div>

          {/* Categorized Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                  <span className="mr-3 text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
                
                {/* Clean, professional skill tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-900/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;