import React from 'react'
import styles from './styles.module.css'
import IconLink from './IconLink'
import { FaGithub } from 'react-icons/fa';

export default function Projects({ title, image, description, link}) {
    return (
        <div className={styles.projectElement}>
            <div className={styles.projectTitle}>
                {title}
            </div>
            <div className={styles.projectBody}>
                <div className={styles.projectImageContainer}>
                    <img className={styles.projectImage} src={image} alt={title}/>
                </div>
                <div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {link ? <IconLink link='https://github.com/ljstaib' icon={<FaGithub size='32' color='white'/>}/> : null}
                    </div>
                </div>
            </div>
        </div>
    )
};