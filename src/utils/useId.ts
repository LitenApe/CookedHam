import { useMemo } from 'react';

const _used: { [key: string]: number } = {};

function useId(prefix: string = 'kitchen') {
  const id = useMemo(() => {
    if (_used[prefix] === undefined) {
      _used[prefix] = 1;
      return `${prefix}-1`;
    } else {
      _used[prefix] += 1;
      return `${prefix}-${_used[prefix]}`;
    }
  }, [prefix]);

  return id;
}

export default useId;
