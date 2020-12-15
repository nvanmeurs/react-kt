import { useDispatch, useSelector } from 'react-redux';

import {
  decrementCounter,
  incrementCounter,
  incrementCounterDelayed,
  resetCounter,
  selectCounterValue,
  setCounter
} from './slice';

export const ApplicationStateCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounterValue);

  const increment = () => dispatch(incrementCounter());
  const decrement = () => dispatch(decrementCounter());
  const reset = () => dispatch(resetCounter());
  const incrementAfterASecond = () => dispatch(incrementCounterDelayed(1000));
  const setTo999 = () => dispatch(setCounter(999));

  return (
    <>
      <p>Current count: {counter}</p>
      <button onClick={setTo999}>999</button>
      <button onClick={incrementAfterASecond}>++ (delayed)</button>
      <button onClick={increment}>++</button>
      <button onClick={reset}>0</button>
      <button onClick={decrement}>--</button>
    </>
  );
};
