import React from 'react'
import Skill from './Skill.jsx'
import styles from './styles.module.css'

//Import images
import AWS from '../assets/skills/AWS.png'
import CPlusPlus from '../assets/skills/CPlusPlus.png'
import JavaScript from '../assets/skills/JavaScript.png'
import Python from '../assets/skills/Python.png'
import ReactImage from '../assets/skills/ReactImage.png'

export default function Skills() {
	return (
		<div>
			<div className={styles.sectionTitle}>
				Skills
			</div>
			<div className={styles.skills}>
				<ul className={styles.skillsList}>
					<Skill title="Python" logo={Python}/>
					<Skill title="C++" logo={CPlusPlus}/>
					<Skill title="JavaScript" logo={JavaScript}/>
					<Skill title="React" logo={ReactImage}/>
					<Skill title="AWS" logo={AWS}/>
				</ul>
			</div>
		</div>
	)
};