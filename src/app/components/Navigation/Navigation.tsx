import React from 'react';
import styles from './Navigation.module.css';

function Navigation(): JSX.Element {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a className={styles.navLink} href="#">
            Country Lodge
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            Ferienhäuser
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            Angebote und Preise
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            Buchung
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            Kontakt
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            Impressum
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
