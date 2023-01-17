import React from 'react'
import styles from './styles.module.css'

export default function IconLink({link, icon}) {
    return (
        <a href={link} className={styles.iconLink} target='_blank' rel='noreferrer'>
            {icon}
        </a>
    )
}