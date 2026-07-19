import { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
          Kaif Mumtaj<span className="text-slate-400 dark:text-slate-500 font-normal"> Ansari</span>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-800"></div> {/* Divider */}
          
          <a href="https://www.linkedin.com/in/ansari-kaif-0540872aa/" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/kaif_0046" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors">LeetCode</a>
          <a href="https://www.hackerrank.com/profile/kaifmumtajansari" target="_blank" rel="noreferrer" className="hover:text-[#00EA64] transition-colors">HackerRank</a>
          <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          
          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all shadow-sm flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* NEW: Resume Button (Desktop) */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/50 dark:hover:bg-blue-600 dark:hover:text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-sm">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-slate-900 dark:text-white focus:outline-none"
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 shadow-xl py-4 px-6 flex flex-col space-y-4 transition-colors duration-300">
          <a href="#projects" onClick={closeMenu} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Work</a>
          <a href="#contact" onClick={closeMenu} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Contact</a>
          
          <div className="h-px w-full bg-slate-100 dark:bg-slate-900 my-2"></div> {/* Divider */}
          
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/kaif-ansari-0540872aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#0A66C2]">LinkedIn</a>
            <a href="https://leetcode.com/u/kaif_0046/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#FFA116]">LeetCode</a>
            <a href="https://www.hackerrank.com/profile/kaifmumtajansari" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#00EA64]">HackerRank</a>
            <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</a>
          </div>

          {/* Theme Toggle (Mobile) */}
          <div className="flex items-center justify-between py-2 border-t border-slate-100 dark:border-slate-900">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Appearance</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* NEW: Resume Button (Mobile) */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-2 text-center bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/50 dark:hover:bg-blue-600 dark:hover:text-white px-5 py-3 rounded-lg font-bold transition-all shadow-sm w-full block">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;