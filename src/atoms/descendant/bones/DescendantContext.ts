import { createContext, useCallback, useContext, useState } from 'react';
import { isNull } from '../../../utils/functions/isNull';
import { useDestroy } from '../../../utils/hooks/useDestroy';
import { DescendantManager } from './DescendantManager';

type ManagerType = InstanceType<typeof DescendantManager>;

type Context = {
  register: ManagerType['register'];
  unregister: ManagerType['unregister'];
  getIndex: ManagerType['getIndex'];
};

export const DescendantContext = createContext<Context | null>(null);

export function useDescendant() {
  const context = useContext(DescendantContext);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  if (isNull(context)) {
    throw new Error('Component must be wrapped by Descendant');
  }

  useDestroy(() => {
    context.unregister(ref);
  });

  const register = useCallback(
    (node: HTMLElement | null) => {
      context.register(node);
      setRef(node);
    },
    [context, setRef]
  );

  return {
    index: context.getIndex(ref),
    register,
  };
}
