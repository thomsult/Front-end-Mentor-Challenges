import React from 'react'
import styles from './styles.module.css'


export default function MainSection(props) {
  return (
  <div className={styles.main}>
<div>
  
        <h2>So, you want to travel to</h2>
    <h1>Space</h1>
    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!</p>
    </div>
    <div >

    <bouton className={styles.bouton}>
    <span>Explore</span>
        <div></div>
        </bouton>

    </div>
    

  </div>
  )
}

