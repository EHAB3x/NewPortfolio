import './App.css';
import Header from './components/Header';
import { Landing } from './components/Landing';
import Social from './components/Social';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraProjects from './components/ExtraProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Landing />
      <Social />
      <About />
      <Skills />
      <Projects />
      <ExtraProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
