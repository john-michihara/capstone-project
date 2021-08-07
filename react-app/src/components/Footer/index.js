import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.title}>Built by John Michihara ©2021</div>
        <a
          className={styles.link}
          href='https://github.com/john-michihara'
          target='_blank'
          rel='noopener noreferrer'>
          <span className={styles.icon}>
            <i className="fab fa-github" />
          </span>
          <span>Github</span>
        </a>
        <a
          className={styles.link}
          href='https://www.linkedin.com/in/john-michihara-305316167/'
          target='_blank'
          rel='noopener noreferrer'>
          <span className={styles.icon}>
            <i className="fab fa-linkedin" />
          </span>
          <span>Linkedin</span>
        </a>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>Cloned Site</div>
        <a
          className={styles.link}
          href='https://quizlet.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Quizlet</a>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>Special Thanks</div>
        <a
          className={styles.link}
          href='https://fontawesome.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Font Awesome (Icons)</a>
        <a
          className={styles.link}
          href='https://storyset.com/pana'
          target='_blank'
          rel='noopener noreferrer'>
          storyset (Illustrations)</a>
        <a
          className={styles.link}
          href='https://www.irasutoya.com/'
          target='_blank'
          rel='noopener noreferrer'>
          イラストや (User profile pictures)</a>
      </div>
    </div>
  );
};

export default Footer;
