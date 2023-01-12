import React from 'react'
import styles from './styles.module.css'
import GitHub from '../assets/GitHub.png'

export default function Projects({ title, image, description, link}) {
    return (
        <div className={styles.projectElement}>
            <div className={styles.projectTitle}>
                {title}
            </div>
            <div className={styles.projectBody}>
                <div>
                    {image}
                </div>
                <div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {link ? <a href={link} target="_blank" rel="noreferrer"><img src={GitHub} alt='GitHub Link' height='32' width='32'/></a> : null}
                    </div>
                </div>
            </div>
        </div>
    )
};