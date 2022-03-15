import React from 'react';
import styles from './MainPage.module.css';
import Form from '../components/Form/Form';
import Navigation from '../components/Navigation/Navigation';
import Paragraph from '../components/Paragraphs/Paragraph';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import ParagraphTwo from '../components/Paragraphs/ParagraphTwo';
import FosterResidenceOne from '../components/FosterResidenceOne/FosterResidenceOne';
import FosterResidenceTwo from '../components/FosterResidenceTwo/FosterResidenceTwo';
import FosterResidenceThree from '../components/FosterResidenceThree/FosterResidenceThree';
import Carousels from '../components/Carousel/Carousel';
import ParagraphBottom from '../components/ParagraphBottom/ParagraphBottom';
import Footer from '../components/Footer/Footer';

function MainPage(): JSX.Element {
  return (
    <div className={styles.mainPage}>
      <div className={styles.first}>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        <div className={styles.form}>
          <Form />
        </div>
        <img
          className={styles.desktopViewFirst}
          src="src/app/assets/DesktopViewFirst.png"
          alt=""
        />
      </div>
      <div className={styles.second}>
        <Paragraph />
      </div>
      <div className={styles.third}>
        <ImageContainer />
      </div>
      <div className={styles.paragraphTwo}>
        <ParagraphTwo />
      </div>
      <div>
        <FosterResidenceOne />
        <FosterResidenceTwo />
        <FosterResidenceThree />
      </div>
      <div className={styles.paragraphBottom}>
        <ParagraphBottom />
      </div>

      <div className={styles.carousel}>
        <Carousels />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
