// client/src/components/Skills.jsx
import React from 'react';

const skillCategories = [
  {
    title: "Backend Development",
    icon: (
      <svg className="w-6 h-6 text-indigo-500 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Building resilient server architectures, high-performance RESTful APIs, and scalable backend logic.",
    skills: [
      {
        name: "Java",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        hoverClass: "hover:border-orange-500/50 hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20",
        level: "Advanced"
      },
      {
        name: "Spring Boot",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        hoverClass: "hover:border-emerald-500/50 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20",
        level: "Advanced"
      },
      {
        name: "Node.js",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        hoverClass: "hover:border-green-500/50 hover:shadow-green-500/10 dark:hover:shadow-green-500/20",
        level: "Intermediate"
      },
      {
        name: "Express",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        hoverClass: "hover:border-slate-500/50 hover:shadow-slate-500/10 dark:hover:shadow-slate-500/20",
        level: "Intermediate",
        darkInvert: true
      },
      {
        name: "Microservices",
        iconType: "svg",
        svgPath: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-indigo-500">
            <rect x="2" y="2" width="6" height="6" rx="1" />
            <rect x="16" y="2" width="6" height="6" rx="1" />
            <rect x="9" y="16" width="6" height="6" rx="1" />
            <path d="M5 8v4h4M19 8v4h-4M12 12v4" />
          </svg>
        ),
        hoverClass: "hover:border-indigo-500/50 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20",
        level: "Conceptual"
      },
      {
        name: "REST APIs",
        iconType: "svg",
        svgPath: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-amber-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        ),
        hoverClass: "hover:border-amber-500/50 hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20",
        level: "Advanced"
      }
    ]
  },
  {
    title: "Frontend Development",
    icon: (
      <svg className="w-6 h-6 text-blue-500 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Designing elegant, responsive, dynamic, and highly user-friendly interfaces.",
    skills: [
      {
        name: "React",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        hoverClass: "hover:border-[#61dafb]/50 hover:shadow-[#61dafb]/10 dark:hover:shadow-[#61dafb]/20",
        level: "Advanced"
      },
      {
        name: "Tailwind CSS",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        hoverClass: "hover:border-[#38bdf8]/50 hover:shadow-[#38bdf8]/10 dark:hover:shadow-[#38bdf8]/20",
        level: "Advanced"
      },
      {
        name: "HTML5",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        hoverClass: "hover:border-[#e34f26]/50 hover:shadow-[#e34f26]/10 dark:hover:shadow-[#e34f26]/20",
        level: "Advanced"
      },
      {
        name: "CSS3",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        hoverClass: "hover:border-[#1572b6]/50 hover:shadow-[#1572b6]/10 dark:hover:shadow-[#1572b6]/20",
        level: "Advanced"
      },
      {
        name: "JavaScript",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        hoverClass: "hover:border-[#f7df1e]/50 hover:shadow-[#f7df1e]/10 dark:hover:shadow-[#f7df1e]/20",
        level: "Advanced"
      }
    ]
  },
  {
    title: "Databases & Storage",
    icon: (
      <svg className="w-6 h-6 text-emerald-500 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: "Structuring schemas, writing advanced database queries, and indexing models.",
    skills: [
      {
        name: "MongoDB",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        hoverClass: "hover:border-emerald-500/50 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20",
        level: "Intermediate"
      },
      {
        name: "SQL",
        iconType: "svg",
        svgPath: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-sky-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
          </svg>
        ),
        hoverClass: "hover:border-sky-500/50 hover:shadow-sky-500/10 dark:hover:shadow-sky-500/20",
        level: "Advanced"
      },
      {
        name: "MySQL",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        hoverClass: "hover:border-sky-600/50 hover:shadow-sky-600/10 dark:hover:shadow-sky-600/20",
        level: "Intermediate"
      }
    ]
  },
  {
    title: "Tools & Infrastructure",
    icon: (
      <svg className="w-6 h-6 text-amber-500 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Version control systems, workflow automation, and virtualization containers.",
    skills: [
      {
        name: "Git",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        hoverClass: "hover:border-[#f05032]/50 hover:shadow-[#f05032]/10 dark:hover:shadow-[#f05032]/20",
        level: "Advanced"
      },
      {
        name: "GitHub",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        hoverClass: "hover:border-slate-400/50 hover:shadow-slate-400/10 dark:hover:shadow-slate-400/20",
        level: "Advanced",
        darkInvert: true
      },
      {
        name: "IntelliJ IDEA",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
        hoverClass: "hover:border-purple-500/50 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20",
        level: "Advanced"
      },
      {
        name: "VS Code",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        hoverClass: "hover:border-[#007acc]/50 hover:shadow-[#007acc]/10 dark:hover:shadow-[#007acc]/20",
        level: "Advanced"
      },
      {
        name: "Postman",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        hoverClass: "hover:border-[#ff6c37]/50 hover:shadow-[#ff6c37]/10 dark:hover:shadow-[#ff6c37]/20",
        level: "Advanced"
      },
      {
        name: "Docker",
        iconType: "cdn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        hoverClass: "hover:border-[#2496ed]/50 hover:shadow-[#2496ed]/10 dark:hover:shadow-[#2496ed]/20",
        level: "Intermediate"
      }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Premium background grid */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--color-slate-50) 100%), linear-gradient(to right, var(--color-slate-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-slate-200) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black, transparent 80%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-900/40 shadow-sm cursor-default">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-5 tracking-tighter text-slate-900 dark:text-white">
            My Engineering <span className="text-blue-600 dark:text-blue-500">Toolkit</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A carefully curated suite of frameworks, languages, and development environments that power my full-stack applications.
          </p>
        </div>

        {/* Categorized Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm flex flex-col"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-2.5 shadow-sm group-hover:border-blue-500/30 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-1">
                  {category.description}
                </p>
              </div>
              
              {/* Grid of Micro-cards representing skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex items-center gap-3 p-3 bg-slate-50/50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 transition-all duration-300 hover:-translate-y-0.5 group/skill cursor-default ${skill.hoverClass}`}
                  >
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl p-1.5 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover/skill:scale-110">
                      {skill.iconType === 'cdn' ? (
                        <img 
                          src={skill.iconUrl} 
                          alt={skill.name} 
                          className={`w-full h-full object-contain ${skill.darkInvert ? 'dark:invert dark:brightness-200' : ''}`}
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      
                      {/* Fallback code if the CDN image fails to load, or if it is a custom SVG */}
                      {skill.iconType === 'svg' ? (
                        skill.svgPath
                      ) : (
                        <span className="hidden text-[10px] font-bold text-slate-400 uppercase select-none">
                          {skill.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    
                    <div className="overflow-hidden">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-xs transition-colors duration-300 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white truncate">
                        {skill.name}
                      </h4>
                      <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 tracking-wide uppercase">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;