import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-black text-white tracking-tighter">
          Kaif Mumtaj<span className="text-slate-500 font-normal"> Ansari</span>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          
          <div className="w-px h-4 bg-slate-800"></div> {/* Divider */}
          
          <a href="https://www.linkedin.com/in/ansari-kaif-0540872aa/" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/kaif_0046" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors">LeetCode</a>
          <a href="https://www.hackerrank.com/profile/kaifmumtajansari" target="_blank" rel="noreferrer" className="hover:text-[#00EA64] transition-colors">HackerRank</a>
          <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>

          {/* Resume Button (Desktop) */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="bg-blue-950/30 text-blue-400 border border-blue-900/50 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-sm">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // X Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-900 shadow-xl py-4 px-6 flex flex-col space-y-4 transition-colors duration-300">
          <a href="#projects" onClick={closeMenu} className="text-lg font-medium text-slate-300 hover:text-white">Work</a>
          <a href="#contact" onClick={closeMenu} className="text-lg font-medium text-slate-300 hover:text-white">Contact</a>
          
          <div className="h-px w-full bg-slate-900 my-2"></div> {/* Divider */}
          
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/kaif-ansari-0540872aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#0A66C2]">LinkedIn</a>
            <a href="https://leetcode.com/u/kaif_0046/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#FFA116]">LeetCode</a>
            <a href="https://www.hackerrank.com/profile/kaifmumtajansari" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#00EA64]">HackerRank</a>
            <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white">GitHub</a>
          </div>

          {/* Resume Button (Mobile) */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-2 text-center bg-blue-950/30 text-blue-400 border border-blue-900/50 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg font-bold transition-all shadow-sm w-full block">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;