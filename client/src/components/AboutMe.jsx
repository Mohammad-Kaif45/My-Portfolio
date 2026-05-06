// client/src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter text-slate-900">
              Beyond the <span className="text-blue-600">Code</span>
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                My story begins in Uttar Pradesh and has taken me to Vapi, Gujarat. Right now, I'm based in Vadodara wrapping up my engineering degree, but my curiosity for technology has been a lifelong journey.
              </p>
              <p>
                While I spend most of my day architecting microservices and building full-stack apps, I believe the best engineers are well-rounded. I have a deep passion for digital photography and image processing—whether it's restoring high-definition photos or experimenting with aesthetic edits, I love blending logic with visual creativity.
              </p>
              <p>
                Off the screen, you can usually find me keeping up with my strength training routine or helping my younger brother prep for his engineering entrance exams. I thrive on continuous growth, both in the gym and in the IDE!
              </p>
            </div>
          </div>

          {/* Right Side: Quick Highlights */}
          <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">📸</div>
              <h4 className="font-bold text-slate-800 mb-1">Digital Photography</h4>
              <p className="text-sm text-slate-500">Image processing, high-def restoration, and stylistic editing.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">🏋️‍♂️</div>
              <h4 className="font-bold text-slate-800 mb-1">Strength Training</h4>
              <p className="text-sm text-slate-500">Staying disciplined and focused with a consistent workout routine.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 sm:col-span-2 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-slate-800 mb-1">Mentorship</h4>
              <p className="text-sm text-slate-500">Guiding others, including tutoring my brother for his JEE Mains and CS assessments.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;