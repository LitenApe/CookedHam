import { ComponentProps } from 'react';
import { useFormControl } from './FormControl';

export type TextFieldProps = Omit<ComponentProps<'input'>, 'id'>;

export default function TextField(props: TextFieldProps) {
  const { id } = useFormControl();
  return <input {...props} aria-labelledby={id} />;
}
