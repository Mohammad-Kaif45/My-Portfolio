import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50">
      <Navbar /> {/* <-- Add this here! */}
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;