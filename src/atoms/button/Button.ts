import { createElement, ForwardedRef, forwardRef } from 'react';
import { DynamicProps, HTMLTags } from '../../utils/types/DynamicProps';

function Button<T extends HTMLTags = 'button'>(
  props: DynamicProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { as = 'button', ...args } = props;
  return createElement(as, { type: 'button', ...args, ref });
}

export default forwardRef(Button);
