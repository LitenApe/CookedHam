import {
  ComponentProps,
  createContext,
  createElement,
  PropsWithChildren,
  useContext,
} from 'react';
import { callAll } from '../../utils/functions/callAll';
import useId from '../../utils/hooks/useId';

interface IFieldContext {
  getFieldProps: (props: ComponentProps<'input'>) => ComponentProps<'input'>;
}

export const FieldContext = createContext<IFieldContext>({
  getFieldProps: (props) => props,
});

function Field(props: PropsWithChildren<ComponentProps<'input'>>) {
  const id = useId('form-field');
  const { children, ...rest } = props;

  function getFieldProps(
    args: ComponentProps<'input'>
  ): ComponentProps<'input'> {
    return {
      id,
      ...rest,
      ...args,
      onChange: callAll(rest.onChange, args.onChange),
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

export default Field;
