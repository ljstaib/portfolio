import React from 'react'
import styles from './styles.module.css'

import IconLink from './IconLink'

// Icons
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    const iconSize = 64;

	return (
        <div>
            <div className={styles.sectionTitle}>
                Contact
            </div>
            <div className={styles.contact}>
                <IconLink link='mailto:ljstaib@bu.edu' icon={<FaEnvelope size={iconSize}/>}/>
                <IconLink link='https://github.com/ljstaib' icon={<FaGithub size={iconSize}/>}/>
                <IconLink link='https://www.linkedin.com/in/luke-staib' icon={<FaLinkedin size={iconSize}/>}/>
            </div>
        </div>
    )
}