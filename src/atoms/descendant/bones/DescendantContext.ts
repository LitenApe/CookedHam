import {
  createContext,
  MutableRefObject,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { isNull } from '../../../utils/functions/isNull';
import { useDestroy } from '../../../utils/hooks/useDestroy';
import { DescendantManager } from './DescendantManager';

type ManagerType = InstanceType<typeof DescendantManager>;

type Context = {
  register: ManagerType['register'];
  unregister: ManagerType['unregister'];
  manager: InstanceType<typeof DescendantManager>;
  descendants?: number;
};

export const DescendantContext = createContext<Context | null>(null);

export function useDescendant() {
  const context = useContext(DescendantContext);
  const ref = useRef<HTMLElement | null>(null);

  if (isNull(context)) {
    throw new Error('Component must be wrapped by Descendant');
  }

  useDestroy(() => {
    context.unregister(ref.current);
  });

  const register = useCallback(
    (node: MutableRefObject<HTMLElement | null>) => {
      context.register(node.current);
      ref.current = node.current;
    },
    [context, ref]
  );

  const index = context.manager.getIndex(ref.current);

  const next = useCallback(
    (loop: boolean = true): HTMLElement | undefined => {
      return context.manager.next(index, loop);
    },
    [context, index]
  );

  const prev = useCallback(
    (loop: boolean = true) => {
      return context.manager.prev(index, loop);
    },
    [context, index]
  );

  return {
    index,
    register,
    next,
    prev,
  };
}
