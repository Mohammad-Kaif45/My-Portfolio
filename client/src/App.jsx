// client/src/App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Education from './components/Education';
import CurrentlyExploring from './components/CurrentlyExploring';

const App = () => {
  useEffect(() => {
    // Ensure dark mode is active everywhere
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="App min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <CurrentlyExploring />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default App;