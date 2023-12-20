// components/Footer.js
import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

   
      <div className={styles.headingContainer}>
      <h1 className={styles.responsiveHeading}>Get in touch</h1>
    </div>
    <p className={styles.responsiveParagraph}>I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <a href="https://mail.google.com/mail/u/0/#inbox" className={styles.a}>riyasaxenabdn2002@gmail.com</a> </p>
    <p className={styles.responsiveParagraph}> with  by <button className={styles.btn}>Riya Saxena</button> using 💮</p>
    </footer>
  );
};

export default Footer;
