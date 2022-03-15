import React from 'react';
import styles from './ParagraphBottom.module.css';

function ParagraphBottom(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.parag}>Zertifikate und Referezen</p>
      <h2 className={styles.subHeading}>Warum Conty Lodge?</h2>
    </div>
  );
}

export default ParagraphBottom;
