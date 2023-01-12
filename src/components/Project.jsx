import React from 'react'
import styles from './styles.module.css'

export default function Projects({ title, image, description, link}) {
    return (
        <div className={styles.projectElement}>
            <div className={styles.projectTitle}>
                {title}
            </div>
            <div className={styles.projectBody}>
                Project Body
                <div>
                    {image}
                </div>
                <div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {link ? link : <div>No link</div>}
                    </div>
                </div>
            </div>
        </div>
    )
};