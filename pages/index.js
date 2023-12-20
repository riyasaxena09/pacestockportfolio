import styles from '../styles/header.module.css'
import { useState } from "react";
import Home from './Home';
import About from './about';
import Skills from './skills';
import List from './list';
import Project from './project';
import Footer from './footer';

import { Element } from 'react-scroll';
import Leader from './leader';
export default  function index(){


  const [allow,setallow]=useState(false);
  function handler(){
 setallow(!allow);
  }
  return(
    <>
<div className={styles.body}>

    <header className={styles.header}>
      {/* <div >
      <a href="#" className={styles.logo}>
   
        Riya

          </a>
          {allow && <List></List>}
          
      </div> */}
      <nav className={styles.nav}>
        <ul className={styles.ulist}>
         <li>
         <a href="#" className={styles.list} >Riya</a>
         </li>
            <li >
          <a href='#about' className={styles.list}>
       
           About
       
            </a>
            </li>
            <li >
          <a href='#project' className={styles.list}>
       
           Project
       
            </a>
            </li>
            <li>
          <a href='#leader' className={styles.list}>
        
       leader
           </a>
          </li>
          <li>
          <a href='#skills' className={styles.list}>
        
       Skills
           </a>
          </li>
          </ul>
          
      </nav>
      
      <div className={styles.menuIcon} onClick={handler}>
       
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {allow && <ul className={styles.u}>
            <li>
            <a href="#" className={styles.l} >Riya</a>
              </li>
              <li>
              <a href='#about' className={styles.l}>
       
       About
   
        </a>
        </li>
        <li >
          <a href='#project' className={styles.l}>
       
           Project
       
            </a>
            </li>
            <li>
          <a href='#leader' className={styles.l}>
        
       leader
           </a>
          </li>
          <li>
          <a href='#skills' className={styles.l}>
        Skills
           </a>
          </li>
              </ul>}
      </header>
     
    
 
      <Element name="/">
       <Home></Home>
      </Element>
    
      <Element name="about">
        <About></About>
      </Element>
      <Element name="project">
       <Project></Project>
      </Element>
      <Element name="leader">
      <Leader></Leader>
      </Element>
      <Element name="skills">
     <Skills></Skills>
      </Element>
      <Element name="footer">
     <Footer></Footer>
      </Element>
      </div>
    
</>
)
}