import React from 'react';
import styles from './App.module.css';
import MainPage from './Pages/MainPage';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <MainPage />
    </div>
  );
}

export default App;
