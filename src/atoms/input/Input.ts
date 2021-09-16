import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';

export type InputProps = ComponentProps<'input'>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return createElement('input', { ...props, ref });
}

export default forwardRef(Input);
