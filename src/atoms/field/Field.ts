import {
  ComponentProps,
  createContext,
  createElement,
  useContext,
} from 'react';
import useId from '../../utils/hooks/useId';

type FieldContextType = {
  getFieldProps: (args: ComponentProps<'input'>) => ComponentProps<'input'>;
};

const context = createContext<FieldContextType>({
  getFieldProps: (props) => props,
});

export default function Field(props: ComponentProps<'input'>) {
  const id = useId('form-field');
  const { children, ...rest } = props;

  function getFieldProps(
    args: ComponentProps<'input'>
  ): ComponentProps<'input'> {
    return {
      id,
      ...rest,
      ...args,
    };
  }

  return createElement(
    context.Provider,
    { value: { getFieldProps } },
    children
  );
}

export function useField() {
  return useContext(context);
}
