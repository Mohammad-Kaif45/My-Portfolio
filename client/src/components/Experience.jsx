// client/src/components/Experience.jsx
import React from 'react';

const experiences = [
  {
    id: 1,
    role: "Java Web Developer",
    company: "MaMo TechnoLabs LLP",
    companyUrl: "#",
    location: "Vadodara, Gujarat",
    duration: "3 Months Internship",
    type: "Internship",
    period: "Recent",
    highlights: [
      "Engineered enterprise-level backend solutions utilizing Java and Spring Boot.",
      "Designed and implemented complex Microservices architectures featuring robust Service Discovery.",
      "Developed scalable, secure APIs to support dynamic frontend user interfaces."
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "API Design", "SQL"]
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Spark 2 ideas",
    companyUrl: "#",
    location: "Ahmedabad, Gujarat",
    duration: "1 Month Internship",
    type: "Internship",
    period: "Recent",
    highlights: [
      "Collaborated with the development team to build responsive, user-friendly web applications.",
      "Assisted in backend API integration and frontend UI/UX improvements.",
      "Gained hands-on experience with modern web development workflows and version control."
    ],
    techStack: ["Web Development", "Frontend", "JavaScript", "Git/GitHub"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--color-white) 100%), linear-gradient(to right, var(--color-slate-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-slate-200) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-900/40 shadow-sm cursor-default inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-500">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My industry journey building scalable backend systems, enterprise architectures, and modern web applications.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500/50 before:to-slate-200 dark:before:to-slate-800">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Animated Timeline Node */}
              <div className="absolute -left-[19px] md:-left-[27px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-500 shadow-md group-hover:scale-125 transition-transform duration-300">
                    <span className="m-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  </span>
                </span>
              </div>

              {/* Experience Card */}
              <div className="bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm group-hover:-translate-y-1">
                
                {/* Header Row: Role & Badges */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 flex-wrap">
                      <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V9m0 4h.01M9 9h.01M9 13h.01" />
                        </svg>
                        {exp.company}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-4 py-1.5 rounded-2xl text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-xs">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Key Accomplishments / Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Key Contributions & Impact
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed group/item">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-xs font-bold transition-transform group-hover/item:scale-110">
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">
                      Technologies:
                    </span>
                    {exp.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold shadow-xs hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;