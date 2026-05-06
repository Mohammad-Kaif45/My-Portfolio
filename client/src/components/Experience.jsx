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
    <section id="experience" className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-lg text-slate-600">
            My industry journey building scalable software and enterprise architecture.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l-2 border-blue-100 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white border-4 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

              {/* Experience Card */}
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{exp.role}</h3>
                    <div className="text-lg font-semibold text-blue-600 mt-1">
                      {exp.company} <span className="text-slate-400 font-normal text-base ml-1">| {exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap self-start">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-slate-600 leading-relaxed">
                      <span className="text-blue-500 mr-3 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {exp.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-md text-xs font-bold"
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