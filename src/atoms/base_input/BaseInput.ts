import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

export type BaseInputProps = ComponentProps<'input'>;

function BaseInput(props: BaseInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { getFieldProps } = useField();
  const args = getFieldProps(props);
  return createElement('input', { ...args, ref });
}

export default forwardRef(BaseInput);
