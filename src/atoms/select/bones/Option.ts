import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

export type OptionProps = ComponentProps<'option'>;

function Option(
  props: OptionProps,
  ref: ForwardedRef<HTMLOptionElement>
): JSX.Element {
  return createElement('option', { ...props, ref });
}

export default forwardRef(Option);
