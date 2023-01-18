import React from 'react'
import styles from './styles.module.css'

export default function IconLink({link, icon, linkName}) {
    return (
        <div className={styles.iconLinkContainer}>
            <p>{linkName}</p>
            <a href={link} className={styles.iconLink} target='_blank' rel='noreferrer'>
                {icon}
            </a>
        </div>
    )
}