import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

function Option(
  props: ComponentProps<'option'>,
  ref: ForwardedRef<HTMLOptionElement>
): JSX.Element {
  return createElement('option', { ...props, ref });
}

export default forwardRef(Option);
