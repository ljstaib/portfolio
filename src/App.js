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
		<section id='projects'>
			<Projects/>
		</section>
		<section id='education'>
			<Education/>
		</section> 
		<section id='skills'>
			<Skills/>
		</section>
		<SiteFooter />
	</div>
	);
}

export default App;