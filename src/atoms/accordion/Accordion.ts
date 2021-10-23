import { ComponentProps, createElement, MouseEvent, useEffect } from 'react';
import { AccordionContext } from './bones/AccordionContext';
import useId from '../../utils/hooks/useId';
import useBoolean from '../../utils/hooks/useBoolean';
import { isDefined } from '../../utils/functions/isDefined';

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
  const [open, setOpen] = useBoolean(initial);

  function onClick(event: MouseEvent) {
    if (isDefined(controlledOnClick)) {
      controlledOnClick(event, !controlledOpen);
    } else {
      setOpen((prev) => !prev);
    }
  }

  useEffect(() => {
    if (isDefined(controlledOpen)) {
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
