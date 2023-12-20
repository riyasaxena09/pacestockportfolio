import styles from '../styles/project.module.css'
import Image from 'next/image'
import Router from 'next/router';
export default function Project(){
    // const boxesData = [
    //     { id: 1, title: 'Restaurant Website', content: '' },
    //     { id: 2, title: 'Box 2', content: 'Content for Box 2' },
    //     { id: 3, title: 'Box 3', content: 'Content for Box 3' },
    //     { id: 4, title: 'Box 4', content: 'Content for Box 4' },
    //   ];
  
    return(
        <>
        <div  className={styles.main} id="project">
            <div className={styles.main2}>
        <div>
        <div className={styles.headingContainer}>
      <h1 className={styles.responsiveHeading}>Recent Projects</h1>
    </div>
        </div>
        <div className={styles.container}>
      {/* {boxesData.map((box) => ( */}
        <div className={styles.box}>
        <h2>Restaurant Website</h2>
          <div className={styles.flex}><button className={styles.repo}> <Image src="/Git.png" height="30" width="30"></Image><a href="https://github.com/riyasaxena09/Restaurant-project" className={styles.a}>  project</a></button><button className={styles.repo} ><a href="https://github.com/riyasaxena09/Restaurant-project" className={styles.a}><Image src="/Git.png" height="30" width="30"></Image> Repo</a></button></div>
          <hr></hr>
          <p className={styles.para}>Languages- <button className={styles.langbtn}>React - 80%</button><button className={styles.langbtn}>CSS - 45%</button><button className={styles.langbtn}>Redux - 20%</button></p>
          <div className={styles.r}><p className={styles.last}><Image src="/Git.png" height="30" width="30"></Image></p><p  className={styles.last}>Updated on November 23</p></div>
        </div>
        <div className={styles.box}>
          <h2>Video Sharing Website</h2>
          <div className={styles.flex}><button className={styles.repo}> <Image src="/Git.png" height="30" width="30"></Image> <a href="https://github.com/riyasaxena09/Video-sharing-app" className={styles.a}>project</a></button><button className={styles.repo}><Image src="/Git.png" height="30" width="30"></Image> <a href="https://github.com/riyasaxena09/Video-sharing-app" className={styles.a}> Repo</a></button></div>
          <hr></hr>
          <p className={styles.para}>Languages- <button className={styles.langbtn}>React - 80%</button><button className={styles.langbtn}>CSS - 45%</button></p>
          <div className={styles.r}><p className={styles.last}><Image src="/Git.png" height="30" width="30"></Image></p><p  className={styles.last}>Updated on December 2</p></div>
        </div>
        <div className={styles.box}>
          <h2>Mail Box</h2>
          <div className={styles.flex}><button className={styles.repo}> <Image src="/Git.png" height="30" width="30"></Image>  <a href="https://github.com/riyasaxena09/mailbox" className={styles.a}>project</a></button><button className={styles.repo}><Image src="/Git.png" height="30" width="30"></Image>  <a href="https://github.com/riyasaxena09/mailbox" className={styles.a}>Repo</a></button></div>
          <hr></hr>
          <p className={styles.para}>Languages- <button className={styles.langbtn}>React - 80%</button><button className={styles.langbtn}>CSS - 45%</button><button className={styles.langbtn}>Redux - 20%</button></p>
          <div className={styles.r}><p className={styles.last}><Image src="/Git.png" height="30" width="30"></Image></p><p  className={styles.last}>Updated on November 23</p></div>
        </div>
        <div className={styles.box}>
          <h2>Expense Tracker With Local Storage</h2>
          <div className={styles.flex}><button className={styles.repo}> <Image src="/Git.png" height="30" width="30"></Image>  <a href="https://github.com/riyasaxena09/localstorage-expense" className={styles.a}>project</a></button><button className={styles.repo}><Image src="/Git.png" height="30" width="30"></Image>  <a href="https://github.com/riyasaxena09/localstorage-expense" className={styles.a}>Repo</a></button></div>
          <hr></hr>
          <p className={styles.para}>Languages- <button className={styles.langbtn}>HTML - 80%</button><button className={styles.langbtn}>CSS - 45%</button><button className={styles.langbtn}>Javascript - 50%</button></p>
          <div className={styles.r}><p className={styles.last}><Image src="/Git.png" height="30" width="30"></Image></p><p  className={styles.last}>Updated on August 29</p></div>
        </div>
       
        
        
      
    </div>
    </div>
    </div>
    
        </>
    )
    }