import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

function Select(
  props: ComponentProps<'select'>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { getFieldProps } = useField();
  const args = getFieldProps(props);
  return createElement('select', { ...args, ref });
}

export default forwardRef(Select);
