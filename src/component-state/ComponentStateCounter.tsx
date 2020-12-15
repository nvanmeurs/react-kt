import { useState } from 'react';

export const ComponentStateCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <p>Current count: {counter}</p>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};
