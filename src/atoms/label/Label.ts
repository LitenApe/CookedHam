import { ComponentProps, createElement } from 'react';
import { useField } from '../field/Field';

export type LabelProps = ComponentProps<'label'>;

export default function Label(props: LabelProps) {
  const { getFieldProps } = useField();
  const { id } = getFieldProps({});
  return createElement('label', { htmlFor: id, ...props });
}
