import { ComponentProps, createContext, useContext } from 'react';

interface Context {
  getFieldProps: (props: ComponentProps<'input'>) => ComponentProps<'input'>;
}

export const FieldContext = createContext<Context>({
  getFieldProps: (props) => props,
});

export function useField() {
  return useContext(FieldContext);
}
