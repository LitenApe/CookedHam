import { createElement, ForwardedRef, forwardRef } from 'react';
import { Label } from '../../atoms/label';
import {
  Option as SelectOption,
  OptionProps,
  Select,
  SelectProps,
} from '../../atoms/select';
import { useId } from '../../utils/hooks/useId';
import { BaseField } from '../base_field';

interface Option extends Omit<OptionProps, 'children' | 'value' | 'ref'> {
  label: string;
  value: string;
}

type SelectFieldProps = {
  label: string;
  options: Array<Option | (() => JSX.Element)>;
} & Omit<SelectProps, 'children'>;

function SelectField(
  props: SelectFieldProps,
  ref: ForwardedRef<HTMLSelectElement>
): JSX.Element {
  const { label, options, ...rest } = props;
  const id = useId('select-field');

  return createElement(BaseField, rest, [
    createElement(Label, { key: `${id}_label_${label}` }, label),
    createElement(
      Select,
      { key: `${id}_component_${label}`, ref },
      options.map((option) =>
        typeof option === 'function'
          ? createElement(option)
          : createElement(
              SelectOption,
              { ...option, key: `${id}_option_${label}` },
              option.label
            )
      )
    ),
  ]);
}

export default forwardRef(SelectField);
