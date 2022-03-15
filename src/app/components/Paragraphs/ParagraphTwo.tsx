import React from 'react';
import styles from './Paragraphs.module.css';

function ParagraphTwo(): JSX.Element {
  return (
    <div>
      <p className={styles.preheader}>Ich bin ein kleiner Blindtext</p>
      <h2 className={styles.subHeading}>Unsere Unterkünfte</h2>
    </div>
  );
}

export default ParagraphTwo;
