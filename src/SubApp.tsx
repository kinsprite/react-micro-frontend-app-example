import React from 'react';

import styles from './subApp.module.css';

function SubApp() : JSX.Element {
  return (
    <div className={styles.container}>
      <a
        href="/"
        rel="noopener noreferrer"
      >
        Goto Home
      </a>
      <div>This is App Example.</div>
    </div>
  );
}

export default SubApp;
