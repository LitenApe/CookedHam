import { ComponentProps, createElement, PropsWithChildren } from 'react';
import { FieldContext, useField } from './bones/FieldContext';
import { callAll } from '../../utils/functions/callAll';
import { useId } from '../../utils/hooks/useId';

function Field(props: PropsWithChildren<ComponentProps<'input'>>) {
  const id = useId('form-field');
  const parent = useField();
  const { children, ...rest } = props;

  function getFieldProps(
    args: ComponentProps<'input'>
  ): ComponentProps<'input'> {
    const group = parent.getFieldProps(rest);
    return {
      ...group,
      id,
      ...args,
      onChange: callAll(group.onChange, args.onChange),
    };
  }

  return createElement(
    FieldContext.Provider,
    { value: { getFieldProps } },
    children
  );
}

export default Field;
