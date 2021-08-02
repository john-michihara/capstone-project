import React from 'react';
import CreateDeckTitle from '../DeckTitle';
import CreateDeckDescription from '../DeckDescription';
import CreateViewable from '../DeckViewable';
import styles from './DeckForm.module.css';

const DeckForm = ({ header, button, title, setTitle, description, setDescription, viewable, setViewable, errors }) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <div className={styles.marginContainer}>
          <h2 className={styles.title}>{header}</h2>
          <button className={styles.button} type='submit'>{button}</button>
        </div>
      </div>
      <div className={styles.container}>
        <div>
        </div>
        <CreateDeckTitle title={title} setTitle={setTitle} errors={errors.title} />
        <CreateDeckDescription description={description} setDescription={setDescription} errors={errors.description} />
        <CreateViewable viewable={viewable} setViewable={setViewable} />
      </div>
    </>
  );
};

export default DeckForm;
