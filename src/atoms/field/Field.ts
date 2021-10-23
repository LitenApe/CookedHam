import { ComponentProps, createElement, PropsWithChildren } from 'react';
import { FieldContext } from './bones/FieldContext';
import { callAll } from '../../utils/functions/callAll';
import useId from '../../utils/hooks/useId';

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

export default Field;
