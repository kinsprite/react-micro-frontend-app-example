import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { AsyncApp, getRegister } from 'react-micro-frontend-framework';

import styles from './ExampleApp.module.css';
import { CounterContainer } from './counter';

function SubAppRouters() {
  const apps = getRegister().getAppsByRoutes().filter((pair) => pair.app.render === 'app-example-sub');

  return (
    <Switch>
      {apps.map((pair) => (
        <Route path={pair.route} key={pair.route}>
          <AsyncApp appId={pair.app.id} routePath={pair.route} />
        </Route>
      ))}
    </Switch>
  );
}

function ExampleApp() : JSX.Element {
  return (
    <div className={styles.container}>
      <a
        href="/"
        rel="noopener noreferrer"
      >
        Goto Home
      </a>
      <div>This is App Example.</div>
      <ul className={styles.linkList}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/app-example">App Example</Link>
        </li>
        <li>
          <Link to="/app-example/sub">
            {'App Example\'s Sub'}
          </Link>
        </li>
      </ul>
      <CounterContainer />
      <SubAppRouters />
    </div>
  );
}

export default ExampleApp;
