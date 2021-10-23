import {
  ComponentProps,
  createElement,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { AccordionContext } from './bones/AccordionContext';
import useId from '../../utils/hooks/useId';

export type AccordionProps = {
  initial?: boolean;
  open?: boolean;
  onClick?: (event: MouseEvent, open: boolean) => void;
} & Omit<ComponentProps<'div'>, 'onClick'>;

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

export default Accordion;
