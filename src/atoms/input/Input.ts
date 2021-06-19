import { createElement } from 'react';
import { useFormFieldContext } from '../../utils/contexts/FormFieldContext';
import { DynamicProps } from '../../utils/DynamicProps';

export type InputProps = Omit<DynamicProps<'input'>, 'as'>;

export default function Input(props: InputProps) {
  const { id } = useFormFieldContext();
  return createElement('input', { id: id, ...props });
}
