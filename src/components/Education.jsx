import React from 'react'
import EducationElement from './EducationElement.jsx'
import BU from '../assets/BU.png'
import styles from './styles.module.css'

export default function Education() {
	return (
		<div>
			<div className={styles.sectionTitle}>
				Education
			</div>
			<div className={styles.projects}>
				<ul className={styles.projectsList}>
					<EducationElement title="Boston University" image={BU} years="2021-2022" description="M.S. in Computer Science" gpa="3.38/4"/>
					<EducationElement title="Boston University" image={BU} years="2017-2021" description="B.S. in Computer Engineering" gpa="3.38/4"/>
				</ul>
			</div>
		</div>
	)
};