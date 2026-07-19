// client/src/components/Experience.jsx
import React from 'react';

const experiences = [
  {
    id: 1,
    role: "Java Web Developer",
    company: "MaMo TechnoLabs LLP",
    location: "Vadodara, Gujarat",
    duration: "3 Months Internship",
    highlights: [
      "Engineered enterprise-level backend solutions utilizing Java and Spring Boot.",
      "Designed and implemented complex Microservices architectures featuring robust Service Discovery.",
      "Developed scalable, secure APIs to support dynamic frontend user interfaces."
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "API Design"]
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Spark 2 ideas",
    location: "Ahmedabad, Gujarat",
    duration: "1 Month Internship",
    highlights: [
      "Collaborated with the development team to build responsive, user-friendly web applications.",
      "Assisted in backend API integration and frontend UI/UX improvements.",
      "Gained hands-on experience with modern web development workflows and version control."
    ],
    techStack: ["Web Development", "Frontend", "Git/GitHub"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-500">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My industry journey building scalable software and enterprise architecture.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l-2 border-blue-100 dark:border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white dark:bg-slate-950 border-4 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

              {/* Experience Card */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-500 mt-1">
                      {exp.company} <span className="text-slate-400 dark:text-slate-500 font-normal text-base ml-1">| {exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap self-start border border-transparent dark:border-blue-900/40">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="text-blue-500 mr-3 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {exp.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-md text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
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