import { createElement, ForwardedRef, forwardRef } from 'react';
import Input, { InputProps } from '../input/Input';

export type RadioProps = Omit<InputProps, 'type'>;

function Radio(props: RadioProps, ref: ForwardedRef<HTMLInputElement>) {
  return createElement(Input, { ...props, type: 'radio', ref });
}

export default forwardRef(Radio);
