import React from 'react'
import styles from './styles.module.css'

// Components
import HeaderSection from './HeaderSection'
import IconLink from './IconLink'

// Icons
import { FaGraduationCap, FaRegFileCode, FaHammer, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SiteHeader() {
    const iconSize = 32;
    const iconColor = 'white';

    return (
        <div className={styles.header}>
            <a href='/' className={styles.headerElementName}>Luke Staib</a>
            <div className={styles.headerElement}>
                <div className={styles.headerSectionContainer}>
                    <HeaderSection name='Projects' icon={<FaRegFileCode className={styles.headerSectionIcon} color={iconColor}/>}/>
                    <HeaderSection name='Education' icon={<FaGraduationCap className={styles.headerSectionIcon} color={iconColor}/>}/>
                    <HeaderSection name='Skills' icon={<FaHammer className={styles.headerSectionIcon} color={iconColor}/>}/>
                </div>
            </div>
            <div className={styles.headerElement}>
                <div className={styles.headerLinkContainer}>
                    <IconLink link='mailto:ljstaib@bu.edu' icon={<FaEnvelope size={iconSize}/>}/>
                    <IconLink link='https://github.com/ljstaib' icon={<FaGithub size={iconSize}/>}/>
                    <IconLink link='https://www.linkedin.com/in/luke-staib' icon={<FaLinkedin size={iconSize}/>}/>
                </div>
            </div>
        </div> 
    )
};