import React from 'react';
import styles from './ImageContainer.module.css';

function ImageContainer(): JSX.Element {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imgOne}>
        <img src="src/app/assets/interiorStairs1.png" alt="" />
      </div>
      <div className={styles.imgTwo}>
        <img src="src/app/assets/interiorView.png" alt="" />
      </div>
      <div className={styles.imgThree}>
        <img src="src/app/assets/interiorBath.png" alt="" />
      </div>
      <div className={styles.imgFour}>
        <img src="src/app/assets/interiorStairs2.png" alt="" />
      </div>
      <div className={styles.imgFive}>
        <img src="src/app/assets/interiorBed.png" alt="" />
      </div>
    </div>
  );
}

export default ImageContainer;
