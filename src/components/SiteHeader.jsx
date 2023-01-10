import React from 'react'
import styles from './styles.module.css'

export default function SiteHeader() {
  return (
    <div className={styles.header}>
        <a href='/' className={styles.headerElement}>Luke Staib</a>
        <div className={styles.headerElement}>
            <div className={styles.headerSectionContainer}>
                <a href='#about' className={styles.headerSection}>About</a>
                <a href='#education' className={styles.headerSection}>Education</a>
                <a href='#projects' className={styles.headerSection}>Projects</a>
                <a href='#skills' className={styles.headerSection}>Skills</a>
            </div>
        </div>
        <div className={styles.headerElement}>
            <div className={styles.headerLinkContainer}>
                <a href='mailto:ljstaib@bu.edu' className={styles.headerLink}><img src="../assets/Email.png" alt='Email'/></a>
                <a href='https://github.com/ljstaib' className={styles.headerLink} target='_blank' rel='noreferrer'><img src="../assets/GitHub.png" alt='GitHub'/></a>
                <a href='https://www.linkedin.com/in/luke-staib-2138b219b/' className={styles.headerLink} target='_blank' rel='noreferrer'><img src="../assets/LinkedIn.png" alt='LinkedIn'/></a>
            </div>
        </div>
    </div> 
  )
};