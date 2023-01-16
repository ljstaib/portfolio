import React from 'react'
import styles from './styles.module.css'

export default function Skill({ title, logo }) {
    return (
        <div className={styles.skillElement}>
            <div className={styles.skillImage}>
                <img src={logo} alt={title} height='64' width='64'/>
            </div>
            <div className={styles.skillTitle}>
                {title}
            </div>
        </div>
    )
};