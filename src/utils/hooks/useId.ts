import { useMemo } from 'react';

const _usedIds: { [key: string]: number } = {};

function useId(prefix: string = 'kitchen') {
  const id = useMemo(() => {
    if (_usedIds[prefix] === undefined) {
      _usedIds[prefix] = 0;
    }
    return `${prefix}-${++_usedIds[prefix]}`;
  }, [prefix]);

  return id;
}

export default useId;
