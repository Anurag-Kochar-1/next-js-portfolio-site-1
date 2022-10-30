import React from 'react'

import styles from "../../../styles/Home.module.css"



const SkillCard = ( {skill}:any ) => {

  return (
    <div className={styles.skillContainer}>
            <div className={styles.techicon}>
                {skill.icon} 
            </div>

            <p className={styles.skillName}> {skill.name} </p>
    </div>
  )
}

export default SkillCard