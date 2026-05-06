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
import Navbar from './components/Navbar';
import Intro from './components/Intro'; // Import the new Intro section
import Skills from './components/Skills'; // Import the new Skills section
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App bg-gray-950 min-h-screen text-gray-100">
      <Navbar />
      
      {/* 
        This is the modern, technical layout: 
        1. Intro (Who are you and why does it matter?)
        2. Skills (What tools do you have for the job?)
        3. Projects (Show the evidence!)
        4. Contact (Let's connect!)
      */}
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default App;