import SiteHeader from './components/SiteHeader';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';

import Maintenance from './components/Maintenance';

import ReactGA from 'react-ga4';
const TRACKING_ID = process.env.T_ID;
ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

function App() {
	const doMaintenance = true;

	if (doMaintenance) {
		return (
			<Maintenance />
		)
	}
	else {
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
				<Contact />
				<SiteFooter />
			</div>
		);
	}
}

export default App;