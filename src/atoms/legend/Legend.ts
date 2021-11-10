import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

function Legend(
  props: ComponentProps<'legend'>,
  ref: ForwardedRef<HTMLLegendElement>
) {
  return createElement('legend', { ...props, ref });
}

export default forwardRef(Legend);
