import { ComponentProps } from 'react';
import { useFormControlContext } from './FormControl';

export type TextFieldProps = Omit<ComponentProps<'input'>, 'id'>;

export default function TextField(props: TextFieldProps) {
  const { id } = useFormControlContext();
  return <input {...props} aria-labelledby={id} />;
}
