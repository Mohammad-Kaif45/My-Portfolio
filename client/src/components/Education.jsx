// client/src/components/Education.jsx
import React from 'react';

const primaryEducation = {
  id: 1,
  degree: "Bachelor of Technology in Computer Science & Engineering",
  institution: "Parul University",
  location: "Vadodara, Gujarat",
  score: "CGPA: 8.47 / 10",
  duration: "2022 - 2026",
  status: "Completed",
  description: "Specializing in software engineering principles, enterprise backend architecture, full-stack web development, and cloud-native microservices. Consistently applying theoretical concepts to real-world software projects.",
  coursework: [
    "Data Structures & Algorithms",
    "Java & Spring Boot",
    "Database Management Systems",
    "Microservices Architecture",
    "Web Engineering",
    "Operating Systems"
  ]
};

const secondaryEducation = [
  {
    id: 2,
    degree: "Higher Secondary Education (12th Science)",
    institution: "Jyoti Dham English Medium School",
    location: "Vapi, Gujarat",
    score: "61.53%",
    duration: "2020 - 2022",
    status: "Completed",
    description: "Built a solid analytical foundation in Higher Mathematics, Physics, and Computer Basics, igniting an interest in software engineering."
  },
  {
    id: 3,
    degree: "Secondary School Certificate (10th Standard)",
    institution: "Jyoti Dham English Medium School",
    location: "Vapi, Gujarat",
    score: "71.33%",
    duration: "2018 - 2020",
    status: "Completed",
    description: "Developed strong academic fundamentals with emphasis on mathematics, logical reasoning, and computer fundamentals."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--color-white) 100%), linear-gradient(to right, var(--color-slate-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-slate-200) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-900/40 shadow-sm cursor-default inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Academic Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-slate-900 dark:text-white">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My formal computer science degree, academic achievements, and foundational schooling.
          </p>
        </div>

        {/* Featured Degree Card (B.Tech) */}
        <div className="mb-10 group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300 pointer-events-none" />
          
          <div className="relative bg-white dark:bg-slate-900/80 border border-blue-200/80 dark:border-blue-900/50 p-7 md:p-10 rounded-3xl shadow-lg backdrop-blur-md transition-all duration-300">
            
            {/* Top Row: Degree & Badges */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    Featured Degree
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {primaryEducation.status}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {primaryEducation.degree}
                </h3>
              </div>

              <div className="flex items-center gap-3 self-start lg:self-center">
                <span className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-300/40 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 font-extrabold text-sm md:text-base shadow-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {primaryEducation.score}
                </span>
              </div>
            </div>

            {/* Middle Meta Info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <strong className="text-slate-800 dark:text-slate-200">{primaryEducation.institution}</strong>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {primaryEducation.location}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {primaryEducation.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {primaryEducation.description}
            </p>

            {/* Coursework & Focus Areas */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Focus Areas & Core Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {primaryEducation.coursework.map((course, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition-colors hover:border-blue-400 dark:hover:border-blue-500"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Secondary Education Grid (12th & 10th) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryEducation.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-7 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 text-xs font-bold whitespace-nowrap">
                    {item.score}
                  </span>
                </div>

                {/* Meta details */}
                <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;