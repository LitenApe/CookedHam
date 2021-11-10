import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

function Option(
  props: ComponentProps<'option'>,
  ref: ForwardedRef<HTMLOptionElement>
) {
  return createElement('option', { ...props, ref });
}

export default forwardRef(Option);
