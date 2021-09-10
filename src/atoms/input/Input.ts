import { ComponentProps, createElement } from 'react';
import { useField } from '../field/Field';

export type InputProps = ComponentProps<'input'>;

export default function Input(props: InputProps) {
  const { getFieldProps } = useField();
  const { id, ...rest } = getFieldProps(props);
  return createElement('input', { id: id, ...rest });
}
