import { ComponentPropsWithoutRef, createContext, useContext } from 'react';

import { InputProps } from '../../input';

type FieldTypes =
  | InputProps<'input'>
  | ComponentPropsWithoutRef<'select'>
  | ComponentPropsWithoutRef<'label'>
  | ComponentPropsWithoutRef<'textarea'>;

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
