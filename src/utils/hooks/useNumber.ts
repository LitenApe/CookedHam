import { Dispatch, SetStateAction, useState } from 'react';

type handlers = {
  increment: () => void;
  decrement: () => void;
};

function useNumber(
  initial: number = 0
): [number, Dispatch<SetStateAction<number>>, handlers] {
  const [value, setValue] = useState(initial);

  function increment() {
    setValue((prev) => prev + 1);
  }

  function decrement() {
    setValue((prev) => prev - 1);
  }

  return [value, setValue, { increment, decrement }];
}

export default useNumber;
