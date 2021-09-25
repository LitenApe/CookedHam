import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field/Field';

export interface InputProps extends ComponentProps<'input'> {}

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { getFieldProps } = useField();
  return createElement('input', { ...getFieldProps(props), ref });
}

export default forwardRef(Input);
