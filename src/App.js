import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavBar/navbar"; 
import Intro from "./components/NavBar/Intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/Experience/experience"; 
import Contact from "./components/Contact/contact";
import SocialSidebar from "./components/SocialSidebar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <SocialSidebar />
      <ThemeToggle />
    </div>
  );
}

export default App;
