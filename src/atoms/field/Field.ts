import {
  ComponentProps,
  createContext,
  createElement,
  PropsWithChildren,
  useContext,
} from 'react';
import useId from '../../utils/hooks/useId';

interface IFieldContext {
  getFieldProps: (props: Record<string, any>) => Record<string, any>;
}

export const FieldContext = createContext<IFieldContext>({
  getFieldProps: (props) => props,
});

export default function Field(
  props: PropsWithChildren<ComponentProps<'input'>>
) {
  const id = useId('form-field');
  const { children, ...rest } = props;

  function getFieldProps(args: Record<string, any>): Record<string, any> {
    return {
      id,
      ...rest,
      ...args,
    };
  }

  return createElement(
    FieldContext.Provider,
    { value: { getFieldProps } },
    children
  );
}

export function useField() {
  return useContext(FieldContext);
}
