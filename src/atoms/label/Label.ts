import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import { useField } from '../field';

function Label(
  props: ComponentProps<'label'>,
  ref: ForwardedRef<HTMLLabelElement>
): JSX.Element {
  const { getFieldProps } = useField();
  const { id } = getFieldProps(props);
  return createElement('label', { htmlFor: id, ...props, ref });
}

export default forwardRef(Label);
