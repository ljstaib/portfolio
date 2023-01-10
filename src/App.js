import SiteHeader from './components/SiteHeader';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div>
        <SiteHeader />
        <About />
        <Projects />
        <Education />
        <Skills />
        <SiteFooter />
    </div>
  );
}

export default App;