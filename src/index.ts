// import React from 'react';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { all } from 'redux-saga/effects';
import { registerApp } from 'react-micro-frontend-framework';

import SubApp from './SubApp';

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
  component: SubApp,
  reducer: combineReducers(appReducers),
  saga: appSagas,
  epic: combineEpics(...appEpics),
});
