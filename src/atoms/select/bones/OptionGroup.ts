import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';

function OptionGroup(
  props: PropsWithChildren<ComponentProps<'optgroup'>>,
  ref: ForwardedRef<HTMLOptGroupElement>
) {
  return createElement('optgroup', { ...props, ref });
}

export default forwardRef(OptionGroup);
