import { ComponentProps, createContext, useContext } from 'react';

export type FieldProps = ComponentProps<'input'> | ComponentProps<'select'>;

interface Context {
  getFieldProps: <T extends FieldProps>(props: T) => T;
}

export const FieldContext = createContext<Context>({
  getFieldProps: (props) => props,
});

export function useField() {
  return useContext(FieldContext);
}
