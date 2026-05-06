// client/src/components/Intro.jsx
import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg'; // Import your image here

const Intro = () => {
  return (
    <section id="intro" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side: Text & CTA */}
        <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight">
            Hi, I'm <span className="text-blue-600">Kaif Ansari</span>, a B.Tech CSE (2026) student.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            I specialize in building robust, scalable backend systems with Java and Spring Boot, and crafting dynamic user interfaces using the MERN stack. I'm currently looking for new opportunities in Software Engineering.
          </p>
          
          <a 
            href="#contact" 
            className="inline-block self-center md:self-start bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg group"
          >
            Let's get started <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right Side: Circular Image */}
        <div className="md:w-2/5 flex justify-center items-center">
          <div className="w-64 h-70 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-slate-50 shadow-xl relative">
            <img 
              src={profileImage} // Placeholder image imported above
              alt="Kaif Mumtaj Ansari" 
              className="w-full h-full object-cover"
            />
            {/* Pulsing decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;