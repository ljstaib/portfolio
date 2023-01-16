import React from 'react'
import styles from './styles.module.css'
import Email from '../assets/Email.png'
import GitHub from '../assets/GitHub.png'
import LinkedIn from '../assets/LinkedIn.png'
import HeaderSection from './HeaderSection'

// Icons
import { FaGraduationCap, FaRegFileCode, FaAtom } from 'react-icons/fa';

export default function SiteHeader() {
    return (
        <div className={styles.header}>
            <a href='/' className={styles.headerElementName}>Luke Staib</a>
            <div className={styles.headerElement}>
                <div className={styles.headerSectionContainer}>
                    <HeaderSection name='Projects' icon={<FaRegFileCode className={styles.headerSectionIcon}/>}/>
                    <HeaderSection name='Education' icon={<FaGraduationCap className={styles.headerSectionIcon}/>}/>
                    <HeaderSection name='Skills' icon={<FaAtom className={styles.headerSectionIcon}/>}/>
                </div>
            </div>
            <div className={styles.headerElement}>
                <div className={styles.headerLinkContainer}>
                    <a href='mailto:ljstaib@bu.edu' className={styles.headerLink}><img src={Email} alt='Email' height={40} width={40}/></a>
                    <a href='https://github.com/ljstaib' className={styles.headerLink} target='_blank' rel='noreferrer'><img src={GitHub} alt='GitHub' height={40} width={40}/></a>
                    <a href='https://www.linkedin.com/in/luke-staib-2138b219b/' className={styles.headerLink} target='_blank' rel='noreferrer'><img src={LinkedIn} alt='LinkedIn' height={40} width={40}/></a>
                </div>
            </div>
        </div> 
    )
};