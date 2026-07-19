// client/src/components/Intro.jsx
import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg'; // Import your image here

const Intro = () => {
  const [typedSegments, setTypedSegments] = useState([
    { text: '', className: '' },
    { text: '', className: 'text-blue-600 dark:text-blue-500' },
    { text: '', className: '' }
  ]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const fullSegments = [
      { text: "Hi, I'm ", className: "" },
      { text: "Kaif Ansari", className: "text-blue-600 dark:text-blue-500" },
      { text: ", a B.Tech CSE (2026) student.", className: "" }
    ];

    let segmentIdx = 0;
    let charIdx = 0;
    let currentTyped = [
      { text: '', className: '' },
      { text: '', className: 'text-blue-600 dark:text-blue-500' },
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
    }, 50); // 50ms per character for smooth typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="relative py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      
      {/* Animated Background Glowing Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-25 dark:opacity-15 animate-float-reverse pointer-events-none"></div>
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 dark:opacity-[0.08] animate-float-slow pointer-events-none"></div>

      {/* Subtle modern dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Text & CTA */}
        <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight text-slate-900 dark:text-white min-h-[110px] sm:min-h-[150px]">
            {typedSegments.map((seg, index) => (
              <span key={index} className={seg.className}>
                {seg.text}
              </span>
            ))}
            {!isDone && (
              <span className="inline-block w-[3px] h-[36px] md:h-[48px] bg-blue-600 dark:bg-blue-500 ml-1 align-middle animate-pulse"></span>
            )}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
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
          <div className="w-64 h-70 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-slate-50 dark:border-slate-900 shadow-xl relative group transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <img 
              src={profileImage} // Placeholder image imported above
              alt="Kaif Mumtaj Ansari" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
            />
            {/* Pulsing decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;