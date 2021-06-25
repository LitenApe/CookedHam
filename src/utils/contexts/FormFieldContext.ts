import {
  createContext,
  createElement,
  PropsWithChildren,
  useContext,
} from 'react';
import useId from '../hooks/useId';

type FormFieldContextType = {
  id?: string;
};

const FormFieldContext = createContext<FormFieldContextType>({});

/**
 * FormField is a component that is used to wrap input fields
 * and labels to bind the two elements for better accessibility.
 * Further, it serves as the go-to place if you want to set the
 * components to a controlled state, as it will help with setting
 * a fields validity message when appropriate.
 */
export default function FormField(props: PropsWithChildren<{}>) {
  const id = useId('form-field');
  return createElement(FormFieldContext.Provider, { ...props, value: { id } });
}

export function useFormFieldContext() {
  return useContext(FormFieldContext);
}
