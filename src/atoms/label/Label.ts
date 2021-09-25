import { ComponentProps, createElement } from 'react';
import { useField } from '../field/Field';

export interface LabelProps extends ComponentProps<'label'> {}

export default function Label(props: LabelProps) {
  const { getFieldProps } = useField();
  const { id } = getFieldProps(props);
  return createElement('label', { htmlFor: id, ...props });
}
