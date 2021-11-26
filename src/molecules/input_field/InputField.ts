import { createElement, ForwardedRef, forwardRef } from 'react';
import { BaseInputProps } from '../../atoms/base_input';
import { Input } from '../../atoms/input';
import { Label } from '../../atoms/label';
import { useId } from '../../utils/hooks/useId';
import { BaseField } from '../base_field';

type InputFieldProps = {
  label: string;
  as?: () => JSX.Element;
} & BaseInputProps<'input'>;

function InputField(
  props: InputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { as = Input, label, ...rest } = props;
  const id = useId('input-field');

  return createElement(BaseField, rest, [
    createElement(Label, { key: `${id}_label` }, label),
    createElement(as, { key: `${id}_component`, ref }),
  ]);
}

export default forwardRef(InputField);
