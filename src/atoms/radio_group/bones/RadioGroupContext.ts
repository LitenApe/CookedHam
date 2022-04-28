import { ComponentPropsWithoutRef, createContext, useContext } from 'react';

interface Context {
  readonly getGroupProps: <T extends ComponentPropsWithoutRef<'input'>>(
    props: T
  ) => T;
}

export const RadioGroupContext = createContext<Context>({
  getGroupProps: (props) => props,
});

export function useRadioGroup() {
  return useContext(RadioGroupContext);
}
