import React from 'react'
import styles from './styles.module.css'

export default function EducationElement({ title, image, years, description, gpa}) {
    return (
        <div className={styles.educationElement}>
            <div className={styles.educationTitle}>
                {title}
            </div>
            <div className={styles.educationBody}>
                <div>
                    <img src={image} alt={title} height='128' width='128'></img>
                </div>
                <div>
                    <div>
                        <div>
                            {years}
                        </div>
                        <div>
                            {description}
                        </div>
                        <div>
                            GPA: {gpa}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};