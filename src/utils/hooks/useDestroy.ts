import { EffectCallback, useEffect } from 'react';

export function useDestroy(f: ReturnType<EffectCallback>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => f, []);
}
