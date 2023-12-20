import styles from '../styles/skills.module.css'
import React, { useEffect, useState } from 'react';
export default function Skills(){
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
      // Set the state to trigger the animation when the component mounts
      setAnimateBars(true);
    }, []);
    return(
        <>
       <div  id='skills'>
        <div className={styles.body}>
       <div className={styles.headingContainer}>
      <h1 className={styles.responsiveHeading}>Skills</h1>
    </div>
    <div className={styles.skillsBarsContainer}>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>React</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>Nextjs</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>javascript</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>HTML</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>C++</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>DSA</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>CSS</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>Bootstrap</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>Redux Toolkit</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className={styles.skillBar}>
        <div className={styles.skillName}>Firebase</div>
        <div className={`${styles.progressBar} ${animateBars ? styles.animate : ''}`}>
          <div className={styles.progress} style={{ width: '80%' }}></div>
        </div>
      </div>
    </div>
    </div>
       </div>
        </>
    )
}