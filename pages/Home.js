import styles from '../styles/header.module.css'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
export default function Home(){
   const [showBoxes, setShowBoxes] = useState(true);
const text="Passionate about changing the world";
    const boxesAnimation = useSpring({
      opacity: showBoxes ? 1 : 0,
    });
  
    const facebookIconAnimation = useSpring({
      opacity: showBoxes ? 0 : 1,
    });
    const handleClick = () => {
        setTimeout(() => {
            setShowBoxes(false); 
        }, 3000);
       
      };
  useEffect(()=>{
   
      handleClick();
  })
    // const handleClick = () => {
    //   setShowBoxes(!showBoxes);
    // };
    // const [displayText, setDisplayText] = useState('');
    // useEffect(() => {
    //     let index = 0;
    //     const intervalId = setInterval(() => {
    //       setDisplayText((prevText) => prevText + text[index]);
    //       index++;
    
    //       if (index === text.length) {
    //         clearInterval(intervalId);
    //       }
    //     }, 100); // Adjust the interval for the typing speed
        
    //     return () => clearInterval(intervalId); // Cleanup on unmount
    //   }, [text]);
   
  
    return(
        <>
        <div className={styles.body}>
         <div className={styles.name}>
  < div className={styles.main}>
  <h1 className={styles.para1}>Riya Saxena</h1>
<div className={styles.para}>
<Typewriter
  options={{
    strings: ['Passionate about changing the world'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
      <animated.div style={boxesAnimation}>
     {showBoxes && <div className={styles.box}></div>}
     {showBoxes && <div className={styles.box}></div>}
     {showBoxes && <div className={styles.box}></div>}
     {showBoxes && <div className={styles.box}></div>}
    
      </animated.div>
      <animated.div style={facebookIconAnimation}>
      <div className={styles.facebookicon}><a href="https://www.instagram.com/"><Image className={styles.img} src='/ins.jpg' width='50' height='50'></Image></a></div>
      <div className={styles.facebookicon}><a href="https://github.com/riyasaxena09"><Image className={styles.img} src='/Git.png' width='50' height='50'></Image></a></div>
      <div className={styles.facebookicon}><a href="https://www.linkedin.com/in/riya-saxena-454167258/"><Image className={styles.img} src='/link.png' width='50' height='50'></Image></a></div>
      <div className={styles.facebookicon}><a href="https://www.facebook.com/"><Image className={styles.img} src='/Face.png' width='50' height='50'></Image></a></div>
      </animated.div>
      <button className={styles.parabtn}><a href='#about' className={styles.me}>About me</a></button>
    </div>
  </div>
</div>


        </>
    )
}