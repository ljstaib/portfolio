import React from 'react'
import WorkElement from './WorkElement.jsx'
import styles from './styles.module.css'

export default function Work() {
	return (
		<div>
			<div className={styles.sectionTitle}>
				Professional Experience
			</div>
			<div className={styles.education}>
				<ul className={styles.educationList}>
					<WorkElement title="Applications Engineer I" company="HPR" image={null} years="2023-2024" description="TODO" />
					<WorkElement title="Applications Engineer I" company="HPR" image={null} years="2023-2024" description="TODO" />
				</ul>
			</div>
		</div>
	)
};