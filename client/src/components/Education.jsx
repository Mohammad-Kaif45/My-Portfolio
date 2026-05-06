// client/src/components/Education.jsx
import React from 'react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "2022 - 2026",
    status: "Currently in 8th Semester",
    description: "Focusing on advanced software engineering principles, full-stack development, and scalable backend architectures. Active in learning AI and Machine Learning foundations."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Jyoti Dham English Medium School",
    location: "Vapi, Gujarat",
    duration: "Completed",
    status: "Alumnus",
    description: "Built a strong foundation in mathematics and computer science, sparking a passion for programming and technology."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900">
            Academic <span className="text-blue-600">Background</span>
          </h2>
          <p className="text-lg text-slate-600">
            My formal computer science training and educational journey.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              
              {/* Decorative Blue Side Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{edu.degree}</h3>
                  <div className="text-lg font-semibold text-blue-600 mt-1">
                    {edu.institution} <span className="text-slate-400 font-normal text-base ml-1">| {edu.location}</span>
                  </div>
                </div>
                <span className="inline-block bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap self-start">
                  {edu.duration}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase tracking-wider">
                {edu.status}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;