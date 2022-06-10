import BackgroundMotion from "./components/BackgroundMotion";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Protfolio from "./components/Protfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Protfolio />
      <Blogs />
      <Contact />
      <SocialLinks />
      <BackgroundMotion />
    </div>
  );
}

export default App;
