import { createElement, ForwardedRef, forwardRef } from 'react';
import Input, { InputProps } from '../input/Input';

function Checkbox(
  props: Omit<InputProps, 'type'>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return createElement(Input, { ...props, type: 'checkbox', ref });
}

export default forwardRef(Checkbox);
