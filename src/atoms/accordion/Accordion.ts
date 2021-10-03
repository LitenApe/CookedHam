import { AnimatePresence, motion } from 'framer-motion';
import {
  createElement,
  createContext,
  useState,
  useContext,
  ComponentProps,
} from 'react';
import useId from '../../utils/hooks/useId';

type Context = {
  id: string;
  open: boolean;
  onClick: () => void;
};

const AccordionContext = createContext<Context | null>(null);

function useAccordion(): Context {
  const context = useContext(AccordionContext);

  if (context === null) {
    throw new Error('Component must be wrapped by "Accordion"');
  }

  return context;
}

function Accordion(props: ComponentProps<'div'>) {
  const id = useId('accordion');
  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen((prev) => !prev);
  }

  return createElement(
    AccordionContext.Provider,
    {
      value: { id, open, onClick },
    },
    createElement('div', props)
  );
}

Accordion.Header = function Header(props: ComponentProps<'button'>) {
  const { id, open, onClick } = useAccordion();
  return createElement('button', {
    id: `${id}_button`,
    'aria-controls': `${id}_content`,
    'aria-expanded': open,
    onClick,
    ...props,
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
