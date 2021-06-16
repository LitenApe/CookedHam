import { createContext, PropsWithChildren, useContext } from 'react';
import useId from '../utils/hooks/useId';

type FormControlContextType = {
  id?: string;
};

const FormControlContext = createContext<FormControlContextType>({});

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
