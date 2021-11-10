import { createElement, PropsWithChildren } from 'react';
import { FieldContext, FieldProps, useField } from './bones/FieldContext';
import { callAll } from '../../utils/functions/callAll';
import { useId } from '../../utils/hooks/useId';

function Field(props: PropsWithChildren<FieldProps>) {
  const id = useId('form-field');
  const parent = useField();
  const { children, ...rest } = props;

  function getFieldProps<T extends FieldProps>(args: T): T {
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
