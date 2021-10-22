import { AnimatePresence, motion } from 'framer-motion';
import {
  createElement,
  createContext,
  useState,
  useContext,
  ComponentProps,
  useEffect,
  MouseEvent,
} from 'react';
import useId from '../../utils/hooks/useId';

type Context = {
  id: string;
  open: boolean;
  onClick: (event: MouseEvent) => void;
};

export const AccordionContext = createContext<Context | null>(null);

function useAccordion(): Context {
  const context = useContext(AccordionContext);

  if (context === null) {
    throw new Error('Component must be wrapped by "Accordion"');
  }

  return context;
}

type AccordionProps = {
  initial?: boolean;
  open?: boolean;
  onClick?: (event: MouseEvent, open: boolean) => void;
} & ComponentProps<'div'>;

function Accordion({
  initial = false,
  open: controlledOpen,
  onClick: controlledOnClick,
  ...rest
}: AccordionProps) {
  const id = useId('accordion');
  const [open, setOpen] = useState(initial);

  function onClick(event: MouseEvent) {
    if (controlledOnClick !== undefined) {
      controlledOnClick(event, !controlledOpen);
    } else {
      setOpen((prev) => !prev);
    }
  }

  useEffect(() => {
    if (controlledOpen !== undefined) {
      setOpen(() => controlledOpen);
    }
  }, [setOpen, controlledOpen]);

  return createElement(
    AccordionContext.Provider,
    {
      value: {
        id,
        onClick,
        open,
      },
    },
    createElement('div', rest)
  );
}

Accordion.Header = function Header(props: ComponentProps<'button'>) {
  const { id, open, onClick } = useAccordion();
  return createElement('button', {
    ...props,
    id: `${id}_button`,
    'aria-controls': `${id}_content`,
    'aria-expanded': open,
    onClick,
  });
};

Accordion.Panel = function Panel({
  children,
  ...rest
}: ComponentProps<'section'>) {
  const { id, open } = useAccordion();
  return createElement(
    'section',
    {
      ...rest,
      id: `${id}_content`,
      'aria-labelledby': `${id}_button`,
      'aria-hidden': !open,
    },
    createElement(
      AnimatePresence,
      { initial: false },
      open
        ? createElement(
            motion.section,
            {
              key: `${id}_content`,
              initial: 'collapsed',
              animate: 'open',
              exit: 'collapsed',
              style: { overflow: 'hidden' },
              variants: {
                open: { height: 'auto' },
                collapsed: { height: 0 },
              },
              transition: { duration: 0.3, type: 'spring' },
            },
            children
          )
        : null
    )
  );
};

export default Accordion;
