import React from 'react'
import Skill from './Skill.jsx'
import styles from './styles.module.css'

//Import images
import AWS from '../assets/skills/AWS.png'
import C from '../assets/skills/C.png'
import CSharp from '../assets/skills/CSharp.png'
import CPlusPlus from '../assets/skills/CPlusPlus.png'
import CSS from '../assets/skills/CSS.png'
import Flask from '../assets/skills/Flask.png'
import Git from '../assets/skills/Git.png'
import HTML from '../assets/skills/HTML.png'
import Java from '../assets/skills/Java.png'
import JavaScript from '../assets/skills/JavaScript.png'
import Linux from '../assets/skills/Linux.png'
import MongoDB from '../assets/skills/MongoDB.png'
import Python from '../assets/skills/Python.png'
import ReactImg from '../assets/skills/ReactImg.png'
import Selenium from '../assets/skills/Selenium.png'
import SQLite from '../assets/skills/SQLite.png'

export default function Skills() {
	return (
		<div>
			<div className={styles.sectionTitleBlack}>
				Skills
			</div>
			<div className={styles.skills}>
				<ul className={styles.skillsList}>
					<Skill title="AWS" logo={AWS}/>
					<Skill title="C" logo={C}/>
					<Skill title="C#" logo={CSharp}/>
					<Skill title="C++" logo={CPlusPlus}/>
					<Skill title="CSS" logo={CSS}/>
					<Skill title="Flask" logo={Flask}/>
					<Skill title="Git" logo={Git}/>
					<Skill title="HTML" logo={HTML}/>
				</ul>
				<ul className={styles.skillsList}>
					<Skill title="Java" logo={Java}/>
					<Skill title="JavaScript" logo={JavaScript}/>
					<Skill title="Linux" logo={Linux}/>
					<Skill title="MongoDB" logo={MongoDB}/>
					<Skill title="Python" logo={Python}/>
					<Skill title="React" logo={ReactImg}/>
					<Skill title="Selenium" logo={Selenium}/>
					<Skill title="SQLite" logo={SQLite}/>
				</ul>
			</div>
		</div>
	)
};