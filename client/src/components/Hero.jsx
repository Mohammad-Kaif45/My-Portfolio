import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col justify-center items-center px-6 sm:px-12 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-primaryText tracking-tight mb-4">
          Kaif Ansari
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-medium text-secondaryText mb-6">
          Full-Stack Developer | B.Tech CSE (2026)
        </h2>
        
        <p className="text-lg text-secondaryText leading-relaxed mb-10 max-w-2xl mx-auto">
          I specialize in building robust, scalable backend systems with Java and Spring Boot, 
          and crafting dynamic, responsive user interfaces using the MERN stack. Always exploring 
          new architectures and AI integration to solve complex problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primaryText text-white rounded-md font-medium hover:bg-opacity-90 transition-all shadow-sm"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/Mohammad-Kaif45" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-surface border border-slate-300 text-primaryText rounded-md font-medium hover:bg-slate-50 transition-all shadow-sm"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;