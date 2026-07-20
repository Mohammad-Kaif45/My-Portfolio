// client/src/components/Terminal.jsx
import React, { useState, useRef, useEffect } from 'react';

const INITIAL_WELCOME = [
  { text: "Kaif OS v2.4.0 (x86_64-pc-linux-gnu)", type: "system" },
  { text: "Type 'help' to view available interactive commands.", type: "prompt" }
];

const COMMAND_MAP = {
  help: [
    { text: "Available Interactive Commands:", type: "highlight" },
    { text: "  whoami          - Display profile summary & engineering focus", type: "info" },
    { text: "  skills          - List core technologies & frameworks", type: "info" },
    { text: "  projects        - Overview of featured enterprise & full-stack projects", type: "info" },
    { text: "  experience      - View software engineering internship details", type: "info" },
    { text: "  education       - View academic degree & university credentials", type: "info" },
    { text: "  contact         - Get direct email & social connection links", type: "info" },
    { text: "  cat resume.txt  - Open resume PDF in a new tab", type: "info" },
    { text: "  clear           - Clear terminal screen history", type: "info" },
    { text: "  sudo            - Request root privileges (Easter egg)", type: "info" }
  ],

  whoami: [
    { text: "Name: Kaif Mumtaj Ansari", type: "highlight" },
    { text: "Role: Software Engineer & Full-Stack Developer", type: "info" },
    { text: "Degree: B.Tech Computer Science & Engineering (2022 - 2026)", type: "info" },
    { text: "University: Parul University, Vadodara, Gujarat", type: "info" },
    { text: "Core Expertise: Java, Spring Boot Microservices, MERN Stack, AI Agent Workflows", type: "info" }
  ],

  skills: [
    { text: "Technical Skill Set Matrix:", type: "highlight" },
    { text: "  [Languages]   : Java (SE/EE), JavaScript (ES6+), Python 3.12, SQL, HTML5/CSS3", type: "info" },
    { text: "  [Backend]     : Spring Boot, Microservices, RESTful APIs, Node.js, Express.js", type: "info" },
    { text: "  [Frontend]    : React.js, Tailwind CSS, Vite", type: "info" },
    { text: "  [Databases]   : MySQL, MongoDB", type: "info" },
    { text: "  [AI & Tools]  : PyTorch, LangChain, Git/GitHub, Docker, Postman, Linux", type: "info" }
  ],

  projects: [
    { text: "Featured Software Engineering Projects:", type: "highlight" },
    { text: "1. FinVault Banking System", type: "accent" },
    { text: "   Stack: Java | Spring Boot | Microservices | Service Discovery | MySQL", type: "info" },
    { text: "   Repo : https://github.com/Mohammad-Kaif45/FinVault-Banking-System", type: "info" },
    { text: "", type: "info" },
    { text: "2. HarvestHub E-Commerce Platform", type: "accent" },
    { text: "   Stack: React.js | Node.js | Express | MongoDB | Tailwind CSS", type: "info" },
    { text: "   Repo : https://github.com/Mohammad-Kaif45/HarvestHub", type: "info" }
  ],

  experience: [
    { text: "Industry Experience:", type: "highlight" },
    { text: "1. Java Web Developer Intern @ MaMo TechnoLabs LLP (3 Months)", type: "accent" },
    { text: "   Engineered enterprise backend solutions utilizing Java, Spring Boot, and Microservices.", type: "info" },
    { text: "", type: "info" },
    { text: "2. Software Engineering Intern @ Spark 2 ideas (1 Month)", type: "accent" },
    { text: "   Collaborated on frontend UI/UX development and RESTful API integrations.", type: "info" }
  ],

  education: [
    { text: "Academic Qualifications:", type: "highlight" },
    { text: "  [B.Tech CSE] : Parul University (2022 - 2026) | CGPA: 8.47 / 10", type: "info" },
    { text: "  [12th HSC]   : Jyoti Dham English Medium School (2020 - 2022) | 61.53%", type: "info" },
    { text: "  [10th SSC]   : Jyoti Dham English Medium School (2018 - 2020) | 71.33%", type: "info" }
  ],

  contact: [
    { text: "Direct Communication Channels:", type: "highlight" },
    { text: "  Email    : kaifmumtajansari@gmail.com", type: "info" },
    { text: "  Location : Vadodara / Vapi, Gujarat, India", type: "info" },
    { text: "  LinkedIn : https://www.linkedin.com/in/ansari-kaif-0540872aa/", type: "info" },
    { text: "  GitHub   : https://github.com/Mohammad-Kaif45", type: "info" },
    { text: "  LeetCode : https://leetcode.com/u/kaif_0046", type: "info" }
  ],

  sudo: [
    { text: "[sudo] password for visitor: *********", type: "info" },
    { text: "Access Granted: Root engineer privileges unlocked! Welcome, Lead Architect.", type: "accent" }
  ]
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_WELCOME);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newEntry = { text: `kaif@portfolio:~$ ${input}`, type: "command" };

    if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (lower === 'cat resume.txt') {
      window.open('/resume.pdf', '_blank');
      setHistory(prev => [
        ...prev,
        newEntry,
        { text: "Opening '/resume.pdf' in a new browser tab...", type: "accent" }
      ]);
      setInput('');
      return;
    }

    const matchedResponse = COMMAND_MAP[lower];

    if (matchedResponse) {
      setHistory(prev => [...prev, newEntry, ...matchedResponse]);
    } else {
      setHistory(prev => [
        ...prev,
        newEntry,
        { text: `zsh: command not found: ${trimmed}. Type 'help' to view valid commands.`, type: "error" }
      ]);
    }

    setInput('');
  };

  return (
    <section id="terminal" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

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

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 bg-blue-950/60 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-900/50 shadow-sm inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Developer Playground
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-white">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Terminal</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Test the interactive Kaif Shell (`zsh`). Type commands to query my background, projects, and skills.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md cursor-text transition-all duration-300 hover:border-blue-500/40"
        >
          {/* macOS Title Bar */}
          <div className="bg-slate-950/90 px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
            </div>
            <div className="text-xs font-mono text-slate-400 font-medium flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              bash — kaif@portfolio:~
            </div>
            <div className="w-12" /> {/* Spacer balance */}
          </div>

          {/* Terminal Content Log */}
          <div className="p-6 md:p-8 font-mono text-xs sm:text-sm h-[380px] overflow-y-auto space-y-2 select-text text-slate-300">
            {history.map((item, idx) => {
              if (item.type === "command") {
                return (
                  <div key={idx} className="text-cyan-400 font-bold pt-2">
                    {item.text}
                  </div>
                );
              }
              if (item.type === "highlight") {
                return (
                  <div key={idx} className="text-amber-300 font-bold pt-1">
                    {item.text}
                  </div>
                );
              }
              if (item.type === "accent") {
                return (
                  <div key={idx} className="text-emerald-400 font-semibold">
                    {item.text}
                  </div>
                );
              }
              if (item.type === "error") {
                return (
                  <div key={idx} className="text-rose-400 font-medium">
                    {item.text}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-slate-300 leading-relaxed">
                  {item.text}
                </div>
              );
            })}

            {/* Input Prompt Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-cyan-400 font-bold shrink-0">kaif@portfolio:~$</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none border-none text-white font-mono text-xs sm:text-sm focus:ring-0"
                placeholder="type 'help'..."
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Bar */}
          <div className="bg-slate-950/80 px-6 py-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Shell Status: Active
            </span>
            <span className="text-slate-400">
              Try: <span className="text-cyan-300">whoami</span> | <span className="text-cyan-300">skills</span> | <span className="text-cyan-300">projects</span> | <span className="text-cyan-300">cat resume.txt</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Terminal;
