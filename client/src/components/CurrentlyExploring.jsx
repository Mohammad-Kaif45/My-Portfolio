// client/src/components/CurrentlyExploring.jsx
import React from 'react';

const exploringTopics = [
  {
    id: 1,
    title: "Agentic AI Development",
    icon: "🤖",
    description: "Researching and building autonomous AI agents capable of reasoning, utilizing tools, and executing complex multi-step workflows to solve real-world engineering problems.",
    status: "Active Research"
  },
  {
    id: 2,
    title: "Retrieval-Augmented Generation (RAG)",
    icon: "🧠",
    description: "Implementing RAG architectures to connect Large Language Models (LLMs) with private enterprise data, creating highly accurate and context-aware applications.",
    status: "Building Prototypes"
  },
  {
    id: 3,
    title: "Machine Learning Foundations",
    icon: "📊",
    description: "Deepening my understanding of the core mathematical principles, data processing pipelines, and model training that power modern Artificial Intelligence.",
    status: "Continuous Learning"
  }
];

const CurrentlyExploring = () => {
  return (
    <section id="exploring" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900">
            Currently <span className="text-blue-600">Exploring</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technology moves fast. Here is what I am actively learning and building in my personal AI lab right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploringTopics.map((topic) => (
            <div 
              key={topic.id} 
              className="bg-white border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-xl border border-blue-100 shadow-sm">
                {topic.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{topic.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {topic.description}
              </p>

              <div className="absolute bottom-6 left-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                  {topic.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyExploring;