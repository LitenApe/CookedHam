import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  const [index, setIndex] = useState(-1);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isNull(context)) {
      return;
    }

    const position = context.getIndex(ref);
    setIndex(position);
  });

  useDestroy(() => {
    if (isNull(context)) {
      return;
    }
    context.unregister(ref);
  });

  if (isNull(context)) {
    throw new Error('Component must be wrapped by Descendant');
  }

  const register = useCallback(
    (node: HTMLElement | null) => {
      if (!isNull(context)) {
        context.register(node);
        setRef(node);
      }
    },
    [context, setRef]
  );

  return {
    index,
    register,
  };
}
