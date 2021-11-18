import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

export type OptionGroupProps = ComponentProps<'optgroup'>;

function OptionGroup(
  props: OptionGroupProps,
  ref: ForwardedRef<HTMLOptGroupElement>
): JSX.Element {
  return createElement('optgroup', { ...props, ref });
}

export default forwardRef(OptionGroup);
