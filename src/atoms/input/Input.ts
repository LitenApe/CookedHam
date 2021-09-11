import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field/Field';

export type InputProps = ComponentProps<'input'>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { getFieldProps } = useField();
  const { id, ...rest } = getFieldProps(props);
  return createElement('input', { id: id, ...rest, ref });
}

export default forwardRef(Input);
