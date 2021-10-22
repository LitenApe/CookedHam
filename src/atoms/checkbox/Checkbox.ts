import { createElement, ForwardedRef, forwardRef } from 'react';
import Input, { InputProps } from '../input/Input';

export type CheckboxProps = Omit<InputProps, 'type'>;

function Checkbox(props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) {
  return createElement(Input, { ...props, type: 'checkbox', ref });
}

export default forwardRef(Checkbox);
