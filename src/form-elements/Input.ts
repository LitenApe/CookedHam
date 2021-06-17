import { ComponentProps, createElement } from 'react';
import { useFormControlContext } from './FormControl';

export type InputProps = Omit<ComponentProps<'input'>, 'id'>;

export default function Input(props: InputProps) {
  const { id } = useFormControlContext();

  return createElement('input', { ...props, id: id });
}
