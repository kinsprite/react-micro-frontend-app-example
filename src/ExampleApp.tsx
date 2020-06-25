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
  const renderItems = getRegister().filterRenderItems('app-example-sub');

  return (
    <Switch>
      {renderItems.map((item) => (
        <Route path={item.render.routePath} key={item.render.routePath}>
          <AsyncApp
            appId={item.app.id}
            renderId={item.render.renderId}
            routePath={item.render.routePath}
            componentKey={item.render.componentKey}
          />
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
        <li>
          <Link to="/sub-at-root">Sub at Root</Link>
        </li>
      </ul>
      <CounterContainer />
      <SubAppRouters />
    </div>
  );
}

export default ExampleApp;
