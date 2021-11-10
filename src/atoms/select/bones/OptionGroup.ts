import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

function OptionGroup(
  props: ComponentProps<'optgroup'>,
  ref: ForwardedRef<HTMLOptGroupElement>
) {
  return createElement('optgroup', { ...props, ref });
}

export default forwardRef(OptionGroup);
