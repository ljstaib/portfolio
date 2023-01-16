import React from 'react'
import styles from './styles.module.css'

export default function HeaderSection({name, icon}) {
    const link = '#' + name.toLowerCase();

    return (
        <a href={link} className={styles.headerSection}>
            {icon}
            <p className={styles.headerSectionName}>{name}</p>
        </a>
    )
}