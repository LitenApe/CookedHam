import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

export type InputProps = ComponentProps<'input'>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { getFieldProps } = useField();
  const args = getFieldProps(props);
  return createElement('input', { ...args, ref });
}

export default forwardRef(Input);
