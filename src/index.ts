// import React from 'react';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { all } from 'redux-saga/effects';
import { registerApp } from 'react-micro-frontend-framework';

import ExampleApp from './ExampleApp';

import {
  counterReducer,
  counterSaga,
  counterEpic,
} from './counter';

const appReducers = {
  counter: counterReducer,
};

function* appSagas() {
  yield all([
    counterSaga(),
  ]);
}

const appEpics = [
  counterEpic,
];

registerApp('app-example', {
  component: ExampleApp,
  reducer: combineReducers(appReducers),
  saga: appSagas,
  epic: combineEpics(...appEpics),
});
