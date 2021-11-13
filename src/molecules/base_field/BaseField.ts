import { cloneElement, createElement, isValidElement } from 'react';
import { Alert } from '../../atoms/alert';
import { Field, FieldProps } from '../../atoms/field';
import { concat } from '../../utils/functions/concat';
import { useId } from '../../utils/hooks/useId';

export type BaseFieldProps = {
  children: Array<JSX.Element>;
} & FieldProps;

function BaseField(props: BaseFieldProps): JSX.Element {
  const id = useId('form-field');
  const { children, ...rest } = props;

  const alertId = `form-field-alert-${id}`;
  const isInvalid = Boolean(rest.error);

  return createElement(
    Field,
    {
      'aria-describedby': concat(
        isInvalid && alertId,
        rest['aria-describedby']
      ),
      ...rest,
    },
    [
      children.map((child, index) => {
        if (!isValidElement(child)) {
          return null;
        }

        return cloneElement(child, { key: `field-element-${id}-${index}` });
      }),
      createElement(
        Alert,
        { key: `field-alert-${id}`, id: alertId, 'aria-live': 'assertive' },
        props.error
      ),
    ]
  );
}

export default BaseField;
