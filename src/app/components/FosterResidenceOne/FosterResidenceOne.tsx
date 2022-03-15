import React from 'react';
import styles from './FosterResidence.module.css';

function FosterResidenceOne(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.styleContainer}></div>
      <div>
        <div className={styles.paragContainer}>
          <p className={styles.parag}>Foster Residence</p>
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.name}>St. George's Paye</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src="src/app/assets/Interior-15.png" alt="" />
      </div>
    </div>
  );
}

export default FosterResidenceOne;
