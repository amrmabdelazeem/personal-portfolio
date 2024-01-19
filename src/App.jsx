import About from "./Components/About";
import Contact from "./Components/Contact.jsx";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <section id="Homepage" className="h-dvh snap-start">
        <Navbar />
        <Hero />
      </section>
      <section id="About" className="h-dvh snap-start">
        <About />
      </section>
      <section id="Skills" className="h-dvh snap-start">
        <Skills />
      </section>
      <Projects />
      <section id="Contact" className="h-dvh snap-start">
        <Contact />
      </section>
    </>
  );
}

export default App;
