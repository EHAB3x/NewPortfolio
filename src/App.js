import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Landing } from './components/Landing';
import Social from './components/Social';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <Header/>
      <Landing />
      <Social />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
