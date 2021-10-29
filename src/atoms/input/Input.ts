import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

export interface InputProps extends ComponentProps<'input'> {}

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { getFieldProps } = useField();
  const args = getFieldProps(props);
  return createElement('input', { ...args, ref });
}

export default forwardRef(Input);
