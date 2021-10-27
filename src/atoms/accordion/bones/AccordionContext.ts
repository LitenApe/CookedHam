import { createContext, useContext, MouseEvent } from 'react';
import { isNull } from '../../../utils/functions/isNull';

type Context = {
  id: string;
  open: boolean;
  onClick: (event: MouseEvent) => void;
};

export const AccordionContext = createContext<Context | null>(null);

export function useAccordion(): Context {
  const context = useContext(AccordionContext);

  if (isNull(context)) {
    throw new Error('Component must be wrapped by "Accordion"');
  }

  return context;
}
