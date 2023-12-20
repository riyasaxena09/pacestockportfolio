import styles from '../styles/Photo.module.css'
import Image from 'next/image'
export default function About(){
    return(
        <>
     
    <div id='about' className={styles.container}>
      <div className={styles.image}>
     <Image className={styles.img} src='/selfie.jpeg' width="300" height="300"></Image>
      </div>
      <div className={styles.content}>
      <div className={styles.headingContainer}>
      <h1 className={styles.responsiveHeading}>About me</h1>
    </div>
        <p className={styles.paragraph}>
        My name is Riya saxena. I am Recently graduated in BCA.
        </p>
        <p className={styles.paragraph}>
       I am passionate about giving back to the community,and my goal is to pursue this passion.
        </p>
        <p className={styles.paragraph}>
       I like working on open source project.
        </p>
        <button className={styles.btn}><a href="https://drive.google.com/file/d/110V7EJwmthqjRYnYFUC47PFQz3p-e55J/view?usp=drive_link" className={styles.a}>Resume</a></button>
      </div>
    </div>
        </>
    )
}