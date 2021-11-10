import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useAccordion } from './AccordionContext';

function AccordionHeader(
  props: ComponentProps<'button'>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { id, open, onClick } = useAccordion();
  return createElement('button', {
    ...props,
    id: `${id}_button`,
    'aria-controls': `${id}_content`,
    'aria-expanded': open,
    onClick,
    ref,
  });
}

export default forwardRef(AccordionHeader);
