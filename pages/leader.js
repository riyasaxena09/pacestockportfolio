// components/ImageWithContent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/ImageCarousel.module.css';

const Leader = () => {
    const images=[
        '/i1.png',
        '/i2.webp',
        '/i3.jpg',
        '/i4.jpg'
    ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id='leader'>
        <div className={styles.body}>
          <div className={styles.headingContainer}>
      <h1 className={styles.responsiveHeading}>Leadership</h1>
    </div>
        
    <div className={styles.imageWithContentContainer}>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {images.map((image,index) => (
            <div className={styles.img}>
              <img src={image} className={styles.def} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.contentContainer}>
      <div className={styles.paragraphContainer}>
        <p className={styles.p}>As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally,  I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Leader;

