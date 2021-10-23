import { ComponentProps, createElement } from 'react';
import { useField } from '../field';

export interface LabelProps extends ComponentProps<'label'> {}

function Label(props: LabelProps) {
  const { getFieldProps } = useField();
  const { id } = getFieldProps({});
  return createElement('label', { htmlFor: id, ...props });
}

export default Label;
