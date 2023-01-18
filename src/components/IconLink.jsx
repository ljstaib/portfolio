import React from 'react'
import styles from './styles.module.css'

export default function IconLink({link, icon, linkName}) {
    if (linkName) return (
        <a href={link} target='_blank' rel='noreferrer'>
            <div className={styles.iconLinkContainer}>
                <p>{linkName}</p>
                <div className={styles.iconLink}>{icon}</div>
            </div>
        </a>
    )
    else return (
        <a href={link ? link : null} className={styles.iconLink} target='_blank' rel='noreferrer'>
            {icon}
        </a>
    )
}