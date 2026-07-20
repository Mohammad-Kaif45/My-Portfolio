// client/src/components/CurrentlyExploring.jsx
import React from 'react';

const aiTopics = [
  {
    id: 1,
    title: "Agentic AI & Multi-Agent Workflows",
    badge: "Active Lab",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    dotColor: "bg-cyan-400",
    description: "Developing autonomous Python AI agents capable of multi-step reasoning, dynamic tool utilization, and collaborative task execution.",
    techStack: ["Python 3.12", "LangChain", "CrewAI", "AutoGen", "Tool Calling"]
  },
  {
    id: 2,
    title: "Deep Learning & Model Fine-Tuning",
    badge: "Model Training",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    dotColor: "bg-blue-400",
    description: "Exploring PyTorch tensor architectures, neural network optimization, and fine-tuning open-source LLM weights on custom datasets.",
    techStack: ["Python", "PyTorch", "NumPy", "HuggingFace", "Transformers"]
  },
  {
    id: 3,
    title: "RAG & Vector Search Systems",
    badge: "Building Prototypes",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    dotColor: "bg-emerald-400",
    description: "Constructing high-throughput Retrieval-Augmented Generation architectures with dense vector embeddings and hybrid semantic search.",
    techStack: ["ChromaDB", "FAISS", "LlamaIndex", "SentenceTransformers", "Embeddings"]
  }
];

const CurrentlyExploring = () => {
  return (
    <section id="exploring" className="py-28 bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, #000 100%), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-cyan-950/40 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-cyan-800/40 shadow-sm inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI & Python Research Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-white">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Exploring</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deepening expertise in modern Artificial Intelligence, Python ecosystem, autonomous agents, and deep learning pipelines.
          </p>
        </div>

        {/* Full-Width Hero Background Banner (Male AI Engineer Image in Background) */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl mb-16 min-h-[380px] md:min-h-[440px] flex items-center group">
          
          {/* Background Image */}
          <img 
            src="/male_ai_engineer_banner.png" 
            alt="Male AI Engineer & Python Researcher" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Dark Gradient Overlay for Maximum Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />

          {/* Banner Content */}
          <div className="relative z-20 p-8 md:p-14 max-w-2xl">
            <span className="px-3.5 py-1.5 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-bold rounded-lg uppercase tracking-wider inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Neural Intelligence & Agentic AI
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Architecting Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Autonomous AI Agents</span>
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Investigating state-of-the-art Multi-Agent frameworks, PyTorch model fine-tuning, and enterprise RAG pipelines using Python 3.12 and modern open-source LLMs.
            </p>

            {/* Tech Stack Chips inside Banner */}
            <div className="flex flex-wrap gap-2">
              {["Python 3.12", "PyTorch", "LangChain", "CrewAI", "ChromaDB", "Transformers"].map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 3 AI Research Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiTopics.map((topic) => (
            <div 
              key={topic.id} 
              className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${topic.badgeColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${topic.dotColor} animate-pulse`}></span>
                    {topic.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {topic.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="h-px w-full bg-slate-800/80 mb-4" />
                <div className="flex flex-wrap gap-1.5">
                  {topic.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/60"
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

export default CurrentlyExploring;