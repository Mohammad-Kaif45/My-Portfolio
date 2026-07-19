// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="font-sans antialiased text-slate-900 bg-slate-50">
//       <Navbar /> {/* <-- Add this here! */}
//       <Hero />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;

// client/src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro'; // Import the new Intro section
import Skills from './components/Skills'; // Import the new Skills section
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Education from './components/Education';
import CurrentlyExploring from './components/CurrentlyExploring';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="App min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* 
        This is the modern, technical layout: 
        1. Intro (Who are you and why does it matter?)
        2. Skills (What tools do you have for the job?)
        3. Projects (Show the evidence!)
        4. Contact (Let's connect!)
      */}
      <Intro />
      <Skills />
      <Experience />
      <Education/>
      <Projects />
      <CurrentlyExploring/>
      <Contact />
      
      <Footer/>
    </div>
  );
};

export default App;