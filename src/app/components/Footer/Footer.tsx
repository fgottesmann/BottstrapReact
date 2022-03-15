import React from 'react';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div>
      <div className={styles.container}>
        <a className={styles.link} href="#">
          Jobs
        </a>
        <a className={styles.link} href="#">
          Presse
        </a>
        <a className={styles.link} href="#">
          AGB
        </a>
        <a className={styles.link} href="#">
          Datenschutz
        </a>
        <a className={styles.link} href="#">
          Impressum
        </a>
        <a className={styles.link} href="#">
          Kontakt
        </a>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.parag}>
          Max Mustermann | Musterstraße 17 | 12345 Musterstadt | Telefonnummer |
          E-Mail-Adresse
        </p>
      </div>
    </div>
  );
}

export default Footer;
