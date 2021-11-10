import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

function Select(
  props: ComponentProps<'select'>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { getFieldProps } = useField();
  // @ts-ignore
  return createElement('select', { ...getFieldProps(props), ref });
}

export default forwardRef(Select);
