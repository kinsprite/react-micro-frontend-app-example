import React from 'react';

import { CounterActionCreator, CounterThunkActionCreator } from './actionCreators';

import styles from './Counter.module.css';

interface CounterProps {
  counter: number,
  onIncrement: CounterActionCreator,
  onIncrementAsync: CounterActionCreator,
  onDecrement: CounterActionCreator,
  onIncrementIfOdd: CounterActionCreator,
  onIncrementThunk: CounterThunkActionCreator,
  onIncrementEpic: CounterActionCreator,
}

const Counter : React.FC<any> = ({
  counter, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd, onIncrementThunk, onIncrementEpic,
}: CounterProps) => (
  <p className={styles.container}>
    Clicked:
    {' '}
    {counter}
    {' '}
    times
    <button type="button" className={styles.btn} onClick={onIncrement}>+</button>
    <button type="button" className={styles.btn} onClick={onDecrement}>-</button>
    <button type="button" className={`${styles.btn} ${styles.btnOdd}`} onClick={onIncrementIfOdd}>Increment if odd</button>
    <button type="button" className={styles.btn} onClick={onIncrementAsync}>+2 Saga</button>
    <button type="button" className={styles.btn} onClick={onIncrementThunk}>+1 Thunk</button>
    <button type="button" className={styles.btn} onClick={onIncrementEpic}>+1 Epic</button>
  </p>
);

export default Counter;
