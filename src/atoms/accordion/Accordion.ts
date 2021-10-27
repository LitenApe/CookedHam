import {
  ComponentProps,
  createElement,
  MouseEvent,
  useCallback,
  useEffect,
} from 'react';
import { AccordionContext } from './bones/AccordionContext';
import useId from '../../utils/hooks/useId';
import useBoolean from '../../utils/hooks/useBoolean';
import { isDefined } from '../../utils/functions/isDefined';
import { isUndefined } from '../../utils/functions/isUndefined';

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

  const onClick = useCallback(
    (event: MouseEvent) => {
      if (isUndefined(controlledOpen) && isDefined(controlledOnClick)) {
        console.warn(
          `${Accordion.name}'s "open" is undefined while the component is in controlled mode. The click event recently received will be ignored. To fix the problem, either remove the "onClick" handler or add "open" to control whether the ${Accordion.name} should be open or not.'`
        );
      } else if (isDefined(controlledOnClick)) {
        controlledOnClick(event, !controlledOpen);
      } else {
        setOpen((prev) => !prev);
      }
    },
    [setOpen, controlledOnClick, controlledOpen]
  );

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
