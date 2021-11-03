import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';
import { useField } from '../field';

function Select(
  props: PropsWithChildren<ComponentProps<'select'>>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { getFieldProps } = useField();
  const args = getFieldProps(props);
  return createElement('select', { ...args, role: 'listbox', ref });
}

export default forwardRef(Select);
