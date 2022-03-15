import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Buche einzigartige Unterkünfte und Aktivitäten.
      </h2>
      <label className={styles.whereLabel} htmlFor="name">
        Wo
      </label>
      <input className={styles.where} type="text" placeholder="Überall" />
      <label className={styles.arriveLabel} htmlFor="name">
        Check-In
      </label>
      <input className={styles.arrive} type="date" />
      <label className={styles.leaveLabel} htmlFor="name">
        Check-out
      </label>
      <input className={styles.leave} type="date" />
      <label className={styles.manyLabel} htmlFor="name">
        Gäste
      </label>
      <input className={styles.many} type="number" placeholder="Gäste" />
      <button className={styles.button}>Suche</button>
    </div>
  );
}

export default Form;
