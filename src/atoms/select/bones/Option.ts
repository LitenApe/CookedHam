import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';

function Option(
  props: PropsWithChildren<ComponentProps<'option'>>,
  ref: ForwardedRef<HTMLOptionElement>
) {
  return createElement('option', { ...props, ref });
}

export default forwardRef(Option);
