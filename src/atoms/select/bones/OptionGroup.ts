import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

function OptionGroup(
  props: ComponentProps<'optgroup'>,
  ref: ForwardedRef<HTMLOptGroupElement>
): JSX.Element {
  return createElement('optgroup', { ...props, ref });
}

export default forwardRef(OptionGroup);
