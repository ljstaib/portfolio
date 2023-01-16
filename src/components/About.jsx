import React from 'react'
import styles from './styles.module.css'

export default function About() {
	return (
		<div>
			{/* <div className={styles.sectionTitle}>
				About
			</div> */}
			<div className={styles.about}>
				<div className={styles.aboutContainer}>
					<div className={styles.aboutHeader}>
						Hi, I'm Luke.
					</div>
					<div className={styles.aboutBody}>
						I'm an aspiring software engineer who is a recent computer science master's graduate from Boston University.
					</div>
				</div>
			</div> 
		</div>
	)
};