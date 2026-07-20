// client/src/components/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Full-Time Role / Internship', message: '' });
  const [status, setStatus] = useState(''); 
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaifmumtajansari@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Sending...');

    try {
      // 1. Send Email via Web3Forms
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "396ca0d3-ae4e-4f96-8ee1-f058d197daba",
            name: formData.name,
            email: formData.email,
            subject: `[${formData.subject}] Message from Portfolio Website`,
            message: formData.message,
        })
      });

      // 2. Save backup message to Render MongoDB backend
      await fetch('https://my-portfolio-ny82.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (emailResponse.ok) {
        setStatus('Message sent successfully! I will respond to your email shortly.');
        setFormData({ name: '', email: '', subject: 'Full-Time Role / Internship', message: '' }); 
      } else {
        setStatus('Failed to send message. Please try again or reach out directly via email.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Network error. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-28 bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-blue-950/60 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-900/50 shadow-sm inline-flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Portal
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tighter text-white">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Conversation</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Open for software engineering roles, full-stack development, and technical project inquiries.
          </p>
        </div>

        {/* Dual Panel Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Direct Reach & Social Links */}
          <div className="lg:col-span-5 bg-slate-900/70 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-md flex flex-col justify-between">
            
            <div>
              {/* Response Time Pill */}
              <div className="mb-8">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Response Time: &lt; 24 Hours
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Get in Touch Directly
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to email me directly or send a message through the form. I look forward to connecting with you.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 mb-8">
                
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-900/50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="truncate">
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</span>
                      <a href="mailto:kaifmumtajansari@gmail.com" className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block">
                        kaifmumtajansari@gmail.com
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors shrink-0 text-xs font-semibold cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-900/50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location & Availability</span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Vadodara / Vapi, Gujarat, India (Open to Remote)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels */}
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.linkedin.com/in/ansari-kaif-0540872aa/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-bold text-slate-300 hover:text-white hover:border-[#0A66C2]/60 transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0A66C2]"></span>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Mohammad-Kaif45" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  GitHub
                </a>
                <a 
                  href="https://leetcode.com/u/kaif_0046" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-bold text-slate-300 hover:text-white hover:border-[#FFA116]/60 transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
                  LeetCode
                </a>
                <a 
                  href="https://www.hackerrank.com/profile/kaifmumtajansari" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-bold text-slate-300 hover:text-white hover:border-[#00EA64]/60 transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00EA64]"></span>
                  HackerRank
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Clean Professional Form */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-md">
            
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="name">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="email">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    placeholder="name@company.com"
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="subject">
                  Inquiry Topic
                </label>
                <select 
                  name="subject" 
                  id="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-medium cursor-pointer"
                >
                  <option value="Full-Time Role / Internship">Full-Time Role / Internship Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration / Freelance</option>
                  <option value="General Inquiry">General Inquiry / Technical Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="message">
                  Your Message <span className="text-blue-400">*</span>
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required
                  placeholder="Share details about the position, project scope, or your inquiry..."
                  value={formData.message} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-blue-500/20 disabled:opacity-60 cursor-pointer"
              >
                {status === 'Sending...' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {/* Status Display */}
              {status && status !== 'Sending...' && (
                <div className={`p-4 rounded-xl text-center text-xs font-semibold transition-all ${
                  status.includes('successfully') 
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-900/60' 
                    : 'bg-rose-950/60 text-rose-400 border border-rose-900/60'
                }`}>
                  {status}
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;