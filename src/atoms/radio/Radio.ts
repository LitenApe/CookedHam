import { createElement, ForwardedRef, forwardRef } from 'react';
import Input, { InputProps } from '../input/Input';

function Radio(
  props: Omit<InputProps, 'type'>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return createElement(Input, { ...props, type: 'radio', ref });
}

export default forwardRef(Radio);
