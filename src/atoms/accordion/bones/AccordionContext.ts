import { createContext, useContext, MouseEvent } from 'react';

type Context = {
  id: string;
  open: boolean;
  onClick: (event: MouseEvent) => void;
};

export const AccordionContext = createContext<Context | null>(null);

export function useAccordion(): Context {
  const context = useContext(AccordionContext);

  if (context === null) {
    throw new Error('Component must be wrapped by "Accordion"');
  }

  return context;
}
