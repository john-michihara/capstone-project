import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './SplashRight.module.css';

const images = [
  '/images/splash1.svg',
  '/images/splash2.svg',
  '/images/splash3.svg'
]

const backgroundColors = [
  { backgroundColor: 'rgb(239, 124, 104)' },
  { backgroundColor: 'rgb(228, 191, 95)' },
  { backgroundColor: 'rgb(103, 200, 203)' }
];

const messages = [
  'Tonight I work so tomorrow I can go places',
  'I\'ll sleep when exams are over',
  'Get through exams to get to vacation'
];

const SplashRight = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (user) history.push('/home');

  const [slide, setSlide] = useState(0);

  const showNextSlide = () => {
    setSlide(prev => (slide === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNextSlide();
      clearInterval(interval);
    }, 5000)
    return () => {
      clearInterval(interval);
    };
  }, [slide]);


  return (
    <div className={styles.background} style={backgroundColors[slide]}>
      <img className={styles.image} src='public/images/splash1.svg' />
      <div className={styles.messages}>
        <div className={styles.progressBar}>
          <div className={styles.fill}></div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>FLASHCARDS IS FOR</h2>
          <div className={styles.message}>{`"${messages[slide]}" students`}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

// images[slide]

export default SplashRight;
