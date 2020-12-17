import { useEffect, useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });

  return (
    <>
      <p>Current count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>++</button>
    </>
  );
};
