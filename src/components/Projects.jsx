import React from 'react'
import Project from './Project.jsx'
import styles from './styles.module.css'

export default function Projects() {
	return (
		<div>
			<div className={styles.sectionTitle}>
				Projects
			</div>
			<div className={styles.projects}>
				<ul className={styles.projectsList}>
					<Project title="Room Clutter Application" image="Image goes here" description="For this project..." link=""/>
					<Project title="Cybersecurity Adversarial Command and Control (C2) Framework" image="Image goes here" description="For this project..." link="https://github.com/jynCoder/KillAByte"/>
				</ul>
			</div>
		</div>
	)
};