import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-black text-slate-900 tracking-tighter">
          Kaif<span className="text-slate-400">.</span>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          
          <div className="w-px h-4 bg-slate-300"></div> {/* Divider */}
          
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/your-profile" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors">LeetCode</a>
          <a href="https://hackerrank.com/your-profile" target="_blank" rel="noreferrer" className="hover:text-[#00EA64] transition-colors">HackerRank</a>
          <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-slate-900 focus:outline-none"
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col space-y-4">
          <a href="#projects" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-slate-900">Work</a>
          <a href="#contact" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-slate-900">Contact</a>
          
          <div className="h-px w-full bg-slate-100 my-2"></div> {/* Divider */}
          
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#0A66C2]">LinkedIn</a>
            <a href="https://leetcode.com/your-profile" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#FFA116]">LeetCode</a>
            <a href="https://hackerrank.com/your-profile" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#00EA64]">HackerRank</a>
            <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;