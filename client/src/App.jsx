import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-primaryText bg-background">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;