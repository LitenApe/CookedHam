import { createContext, PropsWithChildren, useContext } from 'react';
import useId from '../utils/hooks/useId';

type FormControlContextType = {
  id?: string;
};

const FormControlContext = createContext<FormControlContextType>({});

/**
 * FormControl is a component that is used to wrap input fields
 * and labels to bind the two elements for better accessibility.
 * Further, it serves as the go-to place if you want to set the
 * components to a controlled state, as it will help with setting
 * a fields validity message when appropriate.
 */
export default function FormControl(props: PropsWithChildren<{}>) {
  const id = useId('form-control');

  return (
    <FormControlContext.Provider value={{ id }}>
      {props.children}
    </FormControlContext.Provider>
  );
}

export function useFormControlContext() {
  return useContext(FormControlContext);
}
