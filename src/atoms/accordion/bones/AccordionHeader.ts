import { ComponentProps, createElement } from 'react';
import { useAccordion } from './AccordionContext';

function AccordionHeader(props: ComponentProps<'button'>) {
  const { id, open, onClick } = useAccordion();
  return createElement('button', {
    ...props,
    id: `${id}_button`,
    'aria-controls': `${id}_content`,
    'aria-expanded': open,
    onClick,
  });
}

export default AccordionHeader;
