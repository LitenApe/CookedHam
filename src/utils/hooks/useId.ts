import { useMemo } from 'react';

const _usedIds: Record<string, number> = {};

export function useId(prefix: string = 'kitchen') {
  const id = useMemo(() => {
    if (!_usedIds.hasOwnProperty(prefix)) {
      _usedIds[prefix] = 0;
    }
    return `${prefix}-${++_usedIds[prefix]}`;
  }, [prefix]);

  return id;
}
