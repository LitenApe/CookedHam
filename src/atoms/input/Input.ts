import { ComponentProps, createElement } from 'react';
import { useFormFieldContext } from '../../utils/contexts/FormFieldContext';

export type InputProps = Omit<ComponentProps<'input'>, 'id'>;

export default function Input(props: InputProps) {
  const { id } = useFormFieldContext();
  return createElement('input', { ...props, id: id });
}
