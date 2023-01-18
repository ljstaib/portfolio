import React from 'react'
import Project from './Project.jsx'
import styles from './styles.module.css'
import RoomClutter from '../assets/projects/RoomClutter.png'
import C2 from '../assets/projects/C2.png'

export default function Projects() {
	const rc_description = "Worked on a team of four to create a framework for a React Native application that can take a picture of a living space and determine how cluttered that living space is. Worked on user authentication, file upload and storage, in-app display of saved rooms, online versus offline capabilities, and an administrative web application. The application used Google Firebase for its database."
	const c2_description = "For this project..."

	return (
		<div>
			<div className={styles.sectionTitle}>
				Projects
			</div>
			<div className={styles.projects}>
				<ul className={styles.projectsList}>
					<Project title="Room Clutter Application" image={RoomClutter} description={rc_description} link=""/>
					<Project title="Cybersecurity Adversarial Command and Control (C2) Framework" image={C2} description={c2_description} link="https://github.com/jynCoder/KillAByte"/>
				</ul>
			</div>
		</div>
	)
};