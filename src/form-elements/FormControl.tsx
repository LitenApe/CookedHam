import { createContext, PropsWithChildren, useContext } from 'react';
import useId from '../utils/useId';

type FormControlContext = {
  id?: string;
};

const FormContext = createContext<FormControlContext>({});

export default function FormControl(props: PropsWithChildren<{}>) {
  const id = useId('form-control');

  return (
    <FormContext.Provider value={{ id }}>{props.children}</FormContext.Provider>
  );
}

export function useFormControl() {
  return useContext(FormContext);
}
