import React from 'react';
import styles from './Paragraphs.module.css';

function Paragraph(): JSX.Element {
  return (
    <div className={styles.second}>
      <p className={styles.preheader}>Ich bin ein kleiner Blindtext</p>
      <h2 className={styles.subHeading}>Über uns</h2>
      <div className={styles.paragDiv}>
        <p className={styles.paragOne}>
          Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich
          denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein
          blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man
          wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar
          nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text
          als andere?
        </p>
        <p className={styles.paragTwo}>
          {' '}
          Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere
          Texte schaffen das auch nicht. Und darum stört es mich nicht besonders
          blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe
          ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und
          wichtigen Texte meist nur träumen.1
        </p>
      </div>
    </div>
  );
}

export default Paragraph;
