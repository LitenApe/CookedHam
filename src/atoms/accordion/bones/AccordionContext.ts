import { createContext, useContext, MouseEvent } from 'react';
import { isNull } from '../../../utils/functions/isNull';

interface Context {
  readonly id: string;
  readonly open: boolean;
  readonly onClick: (event: MouseEvent) => void;
}

export const AccordionContext = createContext<Context | null>(null);

export function useAccordion(): Context {
  const context = useContext(AccordionContext);

  if (isNull(context)) {
    throw new Error('Component must be wrapped by "Accordion"');
  }

  return context;
}
