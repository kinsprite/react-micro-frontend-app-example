// import React from 'react';
import { registerApp } from 'react-micro-frontend-framework';

import SubApp from './SubApp';

registerApp('app-example', {
  component: SubApp,
});
