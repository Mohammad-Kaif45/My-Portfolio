const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-2xl font-black text-slate-900 tracking-tighter">
          Kaif Ansari<span className="text-slate-400"></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          
          <div className="w-px h-4 bg-slate-300"></div> {/* Divider */}
          
          <a href="https://www.linkedin.com/in/ansari-kaif-0540872aa/" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/kaif_0046/" target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors">LeetCode</a>
          <a href="https://www.hackerrank.com/profile/kaifmumtajansari" target="_blank" rel="noreferrer" className="hover:text-[#00EA64] transition-colors">HackerRank</a>
          <a href="https://github.com/Mohammad-Kaif45" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;