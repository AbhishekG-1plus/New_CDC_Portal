import React from 'react';
import styles from './HeroSection.module.css';
import iitjlogo from '../../img/iitjlogo.png';
import cdclogo from '../../img/cdclogo.png';
import FadeInWhenVisible from '../Animation/FadeIn';
import FadeUpWhenVisible from '../Animation/FadeUp';
function Home1() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.logo}>
        <FadeInWhenVisible>
          <img className={styles.iitj_logo} src={iitjlogo} alt="logo" />
          <img className={styles.cdc_logo} src={cdclogo} alt="logo" />
        </FadeInWhenVisible>
      </div>
      <h1>
        <FadeUpWhenVisible>Career Development Cell</FadeUpWhenVisible>
      </h1>
      <div
        style={{
          borderTop: '2px solid rgb(255 255 255)',
          marginLeft: '2px',
          marginRight: '2px',
          width: '50%',
        }}
      >
        {' '}
        <FadeInWhenVisible></FadeInWhenVisible>
      </div>

      <p>
        <FadeUpWhenVisible>
          Indian Institute of Technology Jodhpur
        </FadeUpWhenVisible>
      </p>
    </div>
  );
}

export default Home1;
