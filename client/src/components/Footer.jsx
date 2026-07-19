// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
            © {new Date().getFullYear()} Kaif Mumtaj Ansari. All rights reserved.
          </p>
        </div>

        {/* Right Side: Quick Links */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="https://www.instagram.com/mohammadkaif1671/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-blue-400 transition-colors">Instagram</a>
          <a href="https://x.com/kaif_m63682" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#FFA116] dark:hover:text-orange-400 transition-colors">X</a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;