const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden min-h-screen flex items-center">
      
      {/* Subtle Background Grid (Premium Corporate Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-6 max-w-4xl relative text-center">
        
        {/* Subtle Tagline */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 shadow-sm">
          Available for Software Engineering Roles
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Full-Stack Developer <br className="hidden md:block" />
          <span className="text-slate-400">B.Tech CSE (2026)</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I specialize in building robust, scalable backend systems with Java and Spring Boot, 
          and crafting dynamic user interfaces using the MERN stack.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
          </a>
          
          {/* Resume Button linked to public folder */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-lg shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;