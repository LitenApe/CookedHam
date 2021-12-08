import { ComponentProps, createContext, useContext } from 'react';

import { InputProps } from '../../input';

type FieldTypes =
  | InputProps<'input'>
  | ComponentProps<'select'>
  | ComponentProps<'label'>
  | ComponentProps<'textarea'>;

export type FieldProps = {
  error?: string;
} & FieldTypes;

interface Context {
  readonly getFieldProps: <T extends FieldProps>(props: T) => T;
}

export const FieldContext = createContext<Context>({
  getFieldProps: (props) => props,
});

export function useField() {
  return useContext(FieldContext);
}
