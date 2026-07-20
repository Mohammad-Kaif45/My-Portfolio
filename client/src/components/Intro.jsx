// client/src/components/Intro.jsx
import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg';

const Intro = () => {
  const [typedSegments, setTypedSegments] = useState([
    { text: '', className: '' },
    { text: '', className: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-black' },
    { text: '', className: '' }
  ]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const fullSegments = [
      { text: "Hi, I'm ", className: "" },
      { text: "Kaif Ansari", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-black" },
      { text: ", B.Tech CSE Student & Software Developer.", className: "" }
    ];

    let segmentIdx = 0;
    let charIdx = 0;
    let currentTyped = [
      { text: '', className: '' },
      { text: '', className: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-black' },
      { text: '', className: '' }
    ];

    const interval = setInterval(() => {
      if (segmentIdx >= fullSegments.length) {
        setIsDone(true);
        clearInterval(interval);
        return;
      }

      const currentSegment = fullSegments[segmentIdx];
      currentTyped = currentTyped.map((seg, idx) => {
        if (idx === segmentIdx) {
          return { ...seg, text: currentSegment.text.slice(0, charIdx + 1) };
        }
        return seg;
      });

      setTypedSegments([...currentTyped]);
      charIdx++;

      if (charIdx >= currentSegment.text.length) {
        segmentIdx++;
        charIdx = 0;
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="relative py-28 md:py-36 bg-slate-950 text-slate-100 transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Cybernetic Dot Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, #000 100%), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-14 relative z-10">
        
        {/* Left Side: Text & CTAs */}
        <div className="lg:w-3/5 text-center lg:text-left flex flex-col justify-center">
          
          {/* Status Badge */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="px-4 py-1.5 bg-blue-950/60 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-900/50 shadow-sm inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Full-Stack & Backend Engineer
            </span>
          </div>

          {/* Typing Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter leading-tight text-white min-h-[120px] sm:min-h-[140px] lg:min-h-[170px]">
            {typedSegments.map((seg, index) => (
              <span key={index} className={seg.className}>
                {seg.text}
              </span>
            ))}
            {!isDone && (
              <span className="inline-block w-[3px] h-[34px] sm:h-[42px] lg:h-[50px] bg-cyan-400 ml-1 align-middle animate-pulse"></span>
            )}
          </h1>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I specialize in engineering high-performance backend microservices with Java and Spring Boot, as well as crafting dynamic full-stack web applications and AI agent workflows.
          </p>

          {/* Quick Credentials Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-10">
            <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
              Parul University '26
            </span>
            <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Java & Spring Boot
            </span>
            <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI & MERN Stack
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 text-sm group"
            >
              Explore Projects 
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-bold py-4 px-8 rounded-2xl shadow-md transition-all duration-300 text-sm"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

        </div>

        {/* Right Side: Profile Image with Glowing Ring & Floating Badges */}
        <div className="lg:w-2/5 flex justify-center items-center relative">
          
          {/* Glowing Animated Outer Ring */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 shadow-2xl group transition-all duration-500 ease-out hover:scale-105">
            
            {/* Avatar Container */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 relative">
              <img 
                src={profileImage}
                alt="Kaif Mumtaj Ansari" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

          </div>

          {/* Floating Badge Top-Right */}
          <div className="absolute top-2 -right-2 sm:right-0 bg-slate-900/90 border border-blue-500/30 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 hidden sm:flex">
            <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-900/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Specialty</span>
              <span className="text-xs font-bold text-white">Backend Architect</span>
            </div>
          </div>

          {/* Floating Badge Bottom-Left */}
          <div className="absolute bottom-2 -left-2 sm:left-0 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 hidden sm:flex">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-900/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Exploration</span>
              <span className="text-xs font-bold text-white">Agentic AI & MERN</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;